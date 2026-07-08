# @iv-stpn/biome-config

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
