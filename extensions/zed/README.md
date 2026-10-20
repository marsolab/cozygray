# Cozy Gray for Zed

Warm gray surfaces with amber, coral, and rose syntax accents. Includes **Cozy Gray Light** and **Cozy Gray Dark**.

[Preview the palette](https://cozygray.marsolab.com) · [Source](https://github.com/marsolab/cozygray)

## Install

Store publication is pending. Until the registry submission is accepted, install this package as a dev extension:

1. Clone this repository.
2. In Zed, open **Extensions** and choose **Install Dev Extension**.
3. Select the `extensions/zed` directory inside the checkout.
4. Open **Theme Selector** and choose **Cozy Gray Light** or **Cozy Gray Dark**.

After store publication, open **Extensions**, search for **Cozy Gray**, and choose **Install**. Both appearances are included in one extension.

To follow your operating system, merge this into Zed's settings:

```json
{
  "theme": {
    "mode": "system",
    "light": "Cozy Gray Light",
    "dark": "Cozy Gray Dark"
  }
}
```

The extension colors the title bar, tabs, panels, editor, Markdown links, selections, syntax, and integrated terminal. It preserves your fonts and layout. If you previously installed standalone Cozy Gray JSON files in Zed's user themes directory, move those files to a backup directory before testing the extension so they do not mask the packaged themes.

## Development

The packaged theme is generated from `src/theme.ts`, the same palette and exporter used by the website downloads. From the repository root:

```sh
npm ci
npm run build:zed
npm run validate:zed
```

Commit the regenerated `themes/cozy-gray.json` with each palette change. See [`docs/zed-publishing.md`](../../docs/zed-publishing.md) for registry submission and release steps.

## License

The files in this extension directory are available under the [MIT License](LICENSE).
