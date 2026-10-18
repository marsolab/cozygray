# Cozy Gray for OpenAI Codex Desktop

Choose OpenAI Codex in the website catalog to download either appearance. The build also produces:

- `dist/themes/codex/cozy-gray-light.codex-theme`
- `dist/themes/codex/cozy-gray-dark.codex-theme`
- `dist/install/openai-codex.md`

## Import

1. Open Settings → Appearance in the desktop app.
2. Use Copy theme in the relevant light/dark section to save your current appearance.
3. Copy the entire Cozy Gray file, including `codex-theme-v1:`. Click Import in the matching section, paste the text, and confirm Import theme.
4. Select Light or Dark, or import both files and use System appearance.

To restore your previous appearance, import the saved share string into the same section. Importing also selects built-in Gruvbox code highlighting and resets UI/code fonts to app defaults. It does not install a named Cozy Gray entry in the base-theme picker. Selecting a different base theme can replace these custom colors.

## Format and scope

The [official Appearance documentation](https://learn.chatgpt.com/docs/reference/settings#appearance) describes custom app colors and theme sharing. The serialization details were checked against the installed desktop application's theme importer (version 26.1013.31256, build 20586) on 2026-10-17; they are an implementation contract, not a published stable schema.

The importer expects `codex-theme-v1:` followed by JSON with `variant`, `codeThemeId`, and `theme`. The selected light/dark section must match `variant`, and `codeThemeId` must name a built-in theme available for that variant. Both variants use `gruvbox` for its warm syntax palette.

The theme contains hex colors for `accent`, `surface`, `ink`, and `semanticColors` (`diffAdded`, `diffRemoved`, `skill`); integer `contrast` from 0 to 100; boolean `opaqueWindows`; and nullable font families under `fonts.code` and `fonts.ui`. `accentSource: "custom"` preserves the amber accent instead of following the account accent. Cozy Gray's main background maps to `surface`; Codex derives secondary surfaces and text colors itself.

The desktop format cannot carry Cozy Gray's individual keyword, string, function, or type token rules. Those remain Gruvbox syntax colors. This port does not apply to the Codex CLI or IDE extension.

## Validation

`npm run validate:themes` checks both share strings, their required fields, palette mapping, variant, built-in code-theme ID, and installation instructions. After `npm run build`, `npm run validate:site` checks the generated downloads and agent guides against the same source.

Both exports also passed the installed application's extracted share-string parser and theme schema in an isolated validation run. Gruvbox's registration was checked for both appearances. This validates serialization independently of the project's assertions; it does not establish rendered appearance.

Desktop UI import and visual acceptance remain unverified: computer automation cannot access the Codex app in this environment. No local application preferences are changed by building or validating these exports.
