---
"@iv-stpn/biome-config": patch
---

Update Biome rules: enable the `project` domain (`recommended`), enable nursery rules (`useSortedClasses`, `noDrizzleDeleteWithoutWhere`, `noDrizzleUpdateWithoutWhere`, `noMisleadingReturnType`, `noUnusedClasses`, `noUselessTypeConversion`, `useIncludes`), enable `correctness/noUndeclaredDependencies` and `correctness/useJsonImportAttributes`, enable `suspicious/noDeprecatedImports`, and remove the `noUnresolvedImports`/`useImportExtensions` overrides. Widen the `@biomejs/biome` peer dependency to `>=2.5.2`.
