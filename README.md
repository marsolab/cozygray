# Cozy Gray

[Website](https://cozygray.marsolab.com) · [Source](https://github.com/marsolab/cozygray)

A responsive landing page and prototype distribution surface for a warm gray editor and terminal theme, with light and dark variants.

## Run

Requires Node.js 22+.

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
node scripts/validate-theme.mjs
npm run validate:site
```

The app uses Astro, React, TypeScript, shadcn/ui, Tailwind CSS, GSAP, Lucide, and self-hosted Geist font files from Fontsource. No API keys or backend are required. Astro commands use separate Vite caches so checks and production builds can run alongside the development server without invalidating its client modules.

## Features

- Live light/dark code preview, TypeScript/Python/Rust samples, and a terminal view.
- Separate website light/dark appearance.
- Synchronized palette swatches with clipboard copying and a saved preview preference.
- Searchable and filterable tool catalog covering the platform families in the reference.
- Generated native configuration downloads and contextual installation instructions.
- Agent handoff with tool-specific light/dark prompts, copy controls, and assistant links.
- Server-rendered SEO metadata, canonical URL, sitemap, structured data, and a 1200×630 social image.
- Responsive navigation, keyboard focus, disclosure controls, and reduced-motion fallback.

## Theme files

`src/theme.ts` defines the two palettes and download formats. All syntax roles pass 4.5:1 contrast against their variant’s background. This is a contrast calculation, not evidence of medical benefit or reduced display emissions.

Native-format configuration files are authored for VS Code and its derivatives, Zed, Neovim, Vim, Helix, Ghostty, iTerm2, Windows Terminal, Warp, WezTerm, Alacritty, tmux, Zellij, Starship, Zsh, eza, and an Obsidian CSS snippet. These are initial configurations, not target-application acceptance-tested integrations or published extensions.

JetBrains, Xcode, Emacs, Moshi, bat, Home Assistant, and OpenCode are visibly marked Planned. Their downloads contain a palette reference rather than an installable theme. All ports need target-app validation before release. VS Code currently requires manually declaring the theme in an extension manifest, as explained in its guide.

## Design and provenance

`PRODUCT.md` records the brief; `DESIGN.md` records the delivered visual system. The material photograph `public/assets/gray-stones.webp` was generated with the built-in image tool. Its exact prompt is in `design/gray-stones.prompt.txt`; provenance is in `design/image-provenance.json` and the asset’s adjacent sidecar. The logo `public/assets/cozy-gray-logo.png` was also created with the built-in image tool. Its prompt and provenance are in `design/cozy-gray-logo.prompt.txt` and `design/cozy-gray-logo.provenance.json`. The original transparent PNG is used as a CSS mask so the symbol follows the site appearance. Code examples are synthetic demonstrations, not an installable `cozy-gray` code library.

Platform scope reference: https://warmburnout.com/#platforms. No reference-site imagery, copy, or theme colors were reused.

## Agent installation and sharing

The supplied AskAI component is integrated beside the download action. Its prompt follows the selected tool and theme appearance. Copy it into a coding agent with local file access, or open an assistant for guided setup. Planned ports explicitly request exploration instead of installation. Public `/install/<tool>.md` guides and `/themes/<format>/<filename>` files are generated from the same source as the UI downloads; they remain crawlable but are excluded from search indexing via response headers.

The provider picker offers ChatGPT, Claude, Cursor, and Antigravity. Cursor uses its [documented prompt deeplink](https://cursor.com/docs/reference/deeplinks), which pre-fills chat for review. Antigravity copies the prompt and tells the user to paste it into the app's agent chat. Its button does not claim to launch or install anything. Cursor and Antigravity marks use monochrome paths sourced from their official websites.

The canonical website URL is configured in `astro.config.mjs`. Sharing metadata and JSON-LD are rendered in `src/pages/index.astro`; the static sitemap and robots file are in `public/`. The generated OG image is `public/og/cozy-gray.jpg`, with its exact prompt and provenance in `design/og-image.*`. `validate:site` checks the built metadata, image dimensions, and every agent guide/theme link before deployment.

## Deploy to Cloudflare Workers

The static Astro build is served by Cloudflare Workers Static Assets. `wrangler.jsonc` declares the Worker name, output directory, and `cozygray.marsolab.com` custom domain. To publish from an authenticated Cloudflare account:

```sh
npm ci
npx wrangler login
npm run deploy
```

The deploy command builds the site, validates theme exports and SEO/agent resources, and uploads `dist/`. Deployment is manual; pushing to GitHub does not automatically publish a release. No server-side secrets are needed by the site.

Cloudflare documentation: https://developers.cloudflare.com/workers/static-assets/

## Theme release follow-up

Package and validate theme ports inside their target applications, implement the planned native ports, and decide licensing and marketplace distribution. No release license or marketplace presence is assumed here.
