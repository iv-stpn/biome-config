---
"@iv-stpn/biome-config": patch
---

Fix `files.includes` glob: replace the invalid `!!**/dist` double-negation with `!dist`, and normalize the linter `includes` ignores to `!dist`/`!node_modules`.
