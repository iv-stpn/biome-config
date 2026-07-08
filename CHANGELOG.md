# @iv-stpn/biome-config

## 1.2.0

### Minor Changes

- d68efa5: Add three new Biome plugins: `biome-typescript-best-practices-plugin`, `biome-react-best-practices-plugin`, and `biome-drizzle-best-practices-plugin`, registered as peer dependencies.

## 1.1.0

### Minor Changes

- ddf1279: Switch the linter to the `all` preset and normalize rule severities against their defaults. Rules are now selectively disabled (`noNodejsModules`, `useBlockStatements`, `useDestructuring`, `noConsole`) rather than individually enabled from `none`. Pin peer and dev dependency versions, and add `lint`/`lint:fix` scripts.

## 1.0.1

### Patch Changes

- 0f08905: Set up automated publishing to npm via Changesets and GitHub Actions.
