# Cozy Gray

A warm gray theme for editors, terminals, and desktop apps, with light and dark appearances and amber, coral, and rose accents.

[Preview and download](https://cozygray.marsolab.com) · [Source](https://github.com/marsolab/cozygray)

## Install

1. Open the [website](https://cozygray.marsolab.com) and select your app.
2. Choose **Cozy Gray Light** or **Cozy Gray Dark**.
3. Download the theme file and follow the installation instructions for that app.

Back up your existing configuration before applying a theme. The website also offers installation prompts you can copy into a coding assistant for guided setup.

### Available formats

- **Editors:** VS Code and derivatives, Zed, Neovim, Vim, and Helix.
- **Terminals:** Ghostty, Otty, iTerm2, Windows Terminal, Warp, WezTerm, and Alacritty.
- **Other tools:** tmux, Zellij, Starship, Zsh, eza, Obsidian (CSS snippet), OpenAI Codex Desktop, Herdr, and OpenCode.

JetBrains, Xcode, Emacs, Moshi, bat, and Home Assistant are marked **Planned** in the catalog. Their downloads are palette references, not installable themes. Available exports may require manual configuration; see each app's installation guide on the website.

### Zed

For standalone installation, download the Zed JSON file, save it in `~/.config/zed/themes/`, and select **Cozy Gray Light** or **Cozy Gray Dark** in the theme selector.

To install both appearances from this repository:

1. Clone the repository.
2. In Zed, open **Extensions → Install Dev Extension**.
3. Select the [`extensions/zed`](extensions/zed) directory.
4. Open **Theme Selector** and choose either appearance.

If you previously installed standalone Cozy Gray theme files, move them to a backup directory before installing the extension so they do not override its themes.

### Otty

Download the `.ottytheme` file, then open **Settings → Appearance → Themes → Import Theme**, choose the **Otty** format, and select the file.

For automatic switching, import both appearances, set the main theme to **Cozy Gray Light**, enable **Use separated theme for dark mode**, and set **Dark Theme** to **Cozy Gray Dark**.

### OpenAI Codex Desktop

Download the `.codex-theme` file and copy its entire contents, including the `codex-theme-v1:` prefix. In **Settings → Appearance**, back up your current appearance with **Copy theme**, then choose **Import** in the matching light or dark section and paste the text. Import both variants to use **System** appearance.

This port customizes app colors and uses built-in **Gruvbox** syntax highlighting with default fonts. To restore your previous appearance, import the saved theme string.

## Preview

The website includes:

- Light and dark code previews with TypeScript, Python, and Rust samples.
- A terminal preview and copyable palette swatches.
- A searchable app catalog with downloads and installation guides.
- Separate website appearance and theme-preview preferences.

## Local development

Requires Bun 1.4.4+.

```sh
bun install --frozen-lockfile
bun run dev
```

The site uses Astro, React, TypeScript, and Tailwind CSS. No API keys or backend are required.

Build and preview locally:

```sh
bun run build
bun run preview
```

Run code checks and validate the generated themes and site:

```sh
bun run check
bun run validate:themes
bun run build
bun run validate:site
```

Both palettes, export formats, and installation instructions are defined in [`src/theme.ts`](src/theme.ts). After changing a palette, regenerate the Zed extension and include the generated file in your changes:

```sh
bun run build:zed
bun run validate:zed
```

## License

The Zed extension is available under the [MIT License](extensions/zed/LICENSE), scoped to the `extensions/zed` directory.
