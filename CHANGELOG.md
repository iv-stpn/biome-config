# @iv-stpn/biome-config

## 1.2.11

### Patch Changes

- eca5170: Enable `complexity/noExcessiveLinesPerFunction` (`maxLines: 90`) and `security/noSecrets` (`entropyThreshold: 100`), and disable `style/noHexColors`.

## 1.2.10

### Patch Changes

- acc1c99: Disable the `project` domain, enable `noPrivateImports`, and disable `useImportExtensions` in the correctness group.

## 1.2.9

### Patch Changes

- e03fa1e: Enable `useNamingConvention` in the style group with `strictCase: false`, and disable `noMagicNumbers`.

## 1.2.8

### Patch Changes

- bbf5ae3: Update Biome rules: enable the `project` domain (`recommended`), enable nursery rules (`useSortedClasses`, `noDrizzleDeleteWithoutWhere`, `noDrizzleUpdateWithoutWhere`, `noMisleadingReturnType`, `noUnusedClasses`, `noUselessTypeConversion`, `useIncludes`), enable `correctness/noUndeclaredDependencies` and `correctness/useJsonImportAttributes`, enable `suspicious/noDeprecatedImports`, and remove the `noUnresolvedImports`/`useImportExtensions` overrides. Widen the `@biomejs/biome` peer dependency to `>=2.5.2`.

## 1.2.7

### Patch Changes

- bc403ec: Add `__DEV__` to the list of globals.

## 1.2.6

### Patch Changes

- 84587e8: Enable `noUndeclaredVariables` (with `checkTypes: false`), disable `noUnresolvedImports`, and add `Bun` to the list of globals.

## 1.2.5

### Patch Changes

- 2f08fc5: Enable `useConsistentTypeDefinitions` with the `type` style, enforcing `type` over `interface` for type definitions.

## 1.2.4

### Patch Changes

- 6c63459: Fix an invalid trailing comma in the `linter.domains` block of `biome.json` that made the config unparseable. Add a husky pre-commit hook that runs typecheck and lint before allowing commits.

## 1.2.3

### Patch Changes

- ac9bd75: Disable framework-specific linter domains (`qwik`, `svelte`, `solid`, `turborepo`, `vue`) by setting them to `none`.

## 1.2.2

### Patch Changes

- 28750fc: Disable additional lint rules: turn off `correctness/useImportExtensions`, and `style/noDefaultExport` and `style/noTernary`.

## 1.2.1

### Patch Changes

- 02eee54: Fix `files.includes` glob: replace the invalid `!!**/dist` double-negation with `!dist`, and normalize the linter `includes` ignores to `!dist`/`!node_modules`.

## 1.2.0

### Minor Changes

- d68efa5: Add three new Biome plugins: `biome-typescript-best-practices-plugin`, `biome-react-best-practices-plugin`, and `biome-drizzle-best-practices-plugin`, registered as peer dependencies.

## 1.1.0

### Minor Changes

- ddf1279: Switch the linter to the `all` preset and normalize rule severities against their defaults. Rules are now selectively disabled (`noNodejsModules`, `useBlockStatements`, `useDestructuring`, `noConsole`) rather than individually enabled from `none`. Pin peer and dev dependency versions, and add `lint`/`lint:fix` scripts.

## 1.0.1

### Patch Changes

- 0f08905: Set up automated publishing to npm via Changesets and GitHub Actions.
