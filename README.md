# @iv-stpn/biome-config

Personal reusable Biome configuration.

## Install

Using npm:

```bash
npm i -D @biomejs/biome biome-one-liner-plugin @iv-stpn/biome-config
```

Using bun:

```bash
bun add -D @biomejs/biome biome-one-liner-plugin @iv-stpn/biome-config
```

## Usage

Create a `biome.json` in your project:

```json
{
  "$schema": "https://biomejs.dev/schemas/2.5.2/schema.json",
  "extends": ["@iv-stpn/biome-config/biome"]
}
```

## Releasing

Publishing to npm is automated with [Changesets](https://github.com/changesets/changesets) and GitHub Actions.

1. After making changes, record them:

   ```bash
   bun run changeset
   ```

   Pick the bump type (patch/minor/major) and describe the change. Commit the generated file in `.changeset/`.

2. Push to `main`. The `Release` workflow opens (or updates) a "Version Packages" PR that bumps the version and updates the changelog.

3. Merge that PR. The workflow then publishes the new version to npm with provenance.

### Setup

The workflow needs an `NPM_TOKEN` repository secret (an npm automation/granular token with publish access). `GITHUB_TOKEN` is provided automatically.
