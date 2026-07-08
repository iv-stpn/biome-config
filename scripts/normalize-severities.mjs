#!/usr/bin/env node
// Normalizes linter rule severities in biome.json against each rule's default.
//
// The normalization depends on the active `linter.rules.preset`:
//
//   preset "all" / "recommended": the preset already enables rules at their
//     DEFAULT severity, so any rule listed at its default is pure noise and is
//     REMOVED. Only rules whose severity differs from the default are kept
//     (promotions like "error", downgrades like "warn", or "off" to disable).
//
//   preset "none": every rule is disabled unless listed, so a rule at its
//     default severity is collapsed to "on" (enable-at-default) rather than
//     removed — removing it would turn the rule off entirely.
//
// The default severity for every rule is read from `biome explain <rule>`.

import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configPath = resolve(root, 'biome.json');
const biomeBin = resolve(root, 'node_modules/.bin/biome');

const config = JSON.parse(readFileSync(configPath, 'utf8'));
const groups = config.linter?.rules ?? {};
const preset = groups.preset ?? 'recommended';

// Category keys in linter.rules that are not rule-groups.
const NON_GROUPS = new Set(['recommended', 'preset']);

const DEFAULT_SEVERITY_RE = /^-\s*Default severity:\s*(\w+)/m;

/** @type {Map<string, string>} */
const severityCache = new Map();
/** @param {string} rule */
function defaultSeverity(rule) {
  if (severityCache.has(rule)) return severityCache.get(rule);
  const out = execFileSync(biomeBin, ['explain', rule], { encoding: 'utf8' });
  const match = out.match(DEFAULT_SEVERITY_RE);
  if (!match) throw new Error(`Could not parse default severity for ${rule}`);
  const sev = match[1];
  severityCache.set(rule, sev);
  return sev;
}

const removed = [];
const collapsed = [];
/** @type {Record<string, unknown>} */
const newGroups = {};
for (const [group, rules] of Object.entries(groups)) {
  if (NON_GROUPS.has(group) || typeof rules !== 'object' || rules === null) newGroups[group] = rules;
  else {
    /** @type {Record<string, unknown>} */
    const newRules = {};
    for (const [rule, current] of Object.entries(rules)) {
      const def = typeof current === 'string' ? defaultSeverity(rule) : null;
      if (typeof current !== 'string' || (current !== def && current !== 'on')) {
        // Non-string entries (rule options) and intentional overrides are kept as-is.
        newRules[rule] = current;
      } else if (preset === 'none') {
        // Removing at "none" would disable the rule; collapse to enable-at-default.
        newRules[rule] = 'on';
        if (current !== 'on') collapsed.push({ group, rule, from: current, default: def });
      } else {
        // Preset enables the rule at its default already — drop the redundant entry.
        removed.push({ group, rule, from: current, default: def });
      }
    }
    // Drop groups that became empty after pruning.
    if (Object.keys(newRules).length > 0) newGroups[group] = newRules;
  }
}
if (config.linter?.rules) config.linter.rules = newGroups;

writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);

if (removed.length === 0 && collapsed.length === 0)
  console.log(`No changes: every listed rule already differs from its default (preset "${preset}").`);
else if (preset === 'none') {
  console.log(`Collapsed ${collapsed.length} rule(s) to "on" (preset "none"):\n`);
  for (const c of collapsed) console.log(`  ${c.group}/${c.rule}: "${c.from}" -> "on"  (default: ${c.default})`);
} else {
  console.log(`Removed ${removed.length} redundant rule(s) already covered by preset "${preset}":\n`);
  for (const c of removed) console.log(`  ${c.group}/${c.rule}: was "${c.from}"  (default: ${c.default})`);
}
