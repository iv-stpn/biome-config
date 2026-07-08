---
"@iv-stpn/biome-config": patch
---

Fix an invalid trailing comma in the `linter.domains` block of `biome.json` that made the config unparseable. Add a husky pre-commit hook that runs typecheck and lint before allowing commits.
