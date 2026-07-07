---
"@iv-stpn/biome-config": minor
---

Switch the linter to the `all` preset and normalize rule severities against their defaults. Rules are now selectively disabled (`noNodejsModules`, `useBlockStatements`, `useDestructuring`, `noConsole`) rather than individually enabled from `none`. Pin peer and dev dependency versions, and add `lint`/`lint:fix` scripts.
