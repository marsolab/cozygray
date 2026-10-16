# Cozy Gray landing page

Implemented as a Astro / React / TypeScript application with shadcn/ui and Tailwind CSS. Run `npm run dev` and open http://localhost:5173/.

## Direction and interaction

The selected taste direction was **The product performs**, seed **1472771767**. The Impeccable concept roll assigned grounded candidate three, an industrial-design material library, seed **0caa486e**. This was a code-first implementation without a user-approved image comp; the user subsequently confirmed Astro + React + shadcn + Tailwind and building directly in code. That preference is recorded in .impeccable/config.json.

Idea: Cozy Gray’s paired graphite and stone palettes become a live workspace dimmer. The light/dark control updates the code preview, palette, and downloaded configuration together. The page also demonstrates three syntax languages and a terminal, supports copyable swatches, and filters a complete reference-derived platform catalog.

The typography was changed from the dealt Archivo to Geist to satisfy the explicit gpt-taste font set. The reel hero was adapted to a readable full-width live workspace, preserving product clarity. The supplied gray palette constraint takes precedence over arbitrary palette draws. A testimonial carousel was omitted because no authentic testimonial material exists. No decorative footage was added to a static theme product.

## Validation and assessment

- Production build passes.
- Theme validator confirms every syntax role has at least 4.5:1 contrast in both variants, both-mode JSON parses, complete guides, and the Ghostty 16-color ramp.
- Source lint: zero failures or warnings.
- Browser inspector at 1440, 768 and 390px: zero failures. Remaining warnings: type-size count, one material image plus interface fragments, no video.
- Browser interaction checks: preview light/dark and Python switching, terminal view, platform filter/search and empty reset, selected installation guide, actual Ghostty download, palette clipboard content, FAQ disclosure, website appearance, and phone navigation.
- Desktop → phone → desktop without reload correctly removes and recreates GSAP pin structure.
- Independent reviewer identified breakpoint cleanup and synthetic-example labeling; both were fixed. The reviewer’s final **ship** verdict scores those two fixes resolved, with no regression identified from that batch. It is not a comp-fidelity certification.

Final self-assessment: design 7.8, usability 8.1, creativity 7.3, content 8.1; weighted score **7.83/10**. The product’s real interface is the principal visual evidence; photography is deliberately limited to one material still life.

## Image provenance

Built-in `image_gen` created **public/assets/gray-stones.webp**, a conceptual material photograph showing graphite-gray stones and sage. The final exact prompt is **design/gray-stones.prompt.txt**. Provenance is stored in **design/image-provenance.json** and the image’s adjacent metadata sidecar. No external photographs, footage, bundled stock assets, or found-image credits were used. Four live HTML interface fragments show authored example code, not raster screenshots. A visible caption identifies the synthetic code and terminal examples.

## Product facts still to confirm

Cozy Gray is a working name inferred from the folder. The stack and deploy destination were not confirmed. The downloads are free within this prototype; release licensing and marketplace distribution remain undecided. Native theme configurations are authored but not acceptance-tested in their target applications. Seven native ports are marked Planned and download a clearly identified palette reference. No claims of medical benefit or measured display-emission reduction are made.

Platform scope source: [Warm Burnout platforms](https://warmburnout.com/#platforms). Its imagery, copy, and theme colors were not reused.

## Palette revision

The user requested less green and brighter syntax. Page and editor surfaces now use neutral warm grays, with taupe controls and brighter amber, coral, sand, and rose syntax. Native downloads share these revised palettes. The light theme uses deeper chromatic accents to retain AA text contrast.

Revision validation: Astro typecheck and static production build pass. Both palette exports pass the theme validator, including tmux option names; every preview CSS role matches its native export value. All syntax colors meet AA contrast (dark chromatic roles 6.91–10.33:1; light chromatic roles 4.61–5.18:1). Fresh browser visual and interaction validation completed after the preview reopened. Current desktop (1440px), mobile (390px), and user viewport (890px) captures show the revised palette without document overflow.

## Interactive preview repair

The user reported that buttons did not respond. Browser checks reproduced a React hydration failure: the HTML rendered, but dynamically imported dependencies returned HTTP 504 “Outdated Optimize Dep”. Running Astro checks/builds had replaced the active development server’s shared Vite dependency cache. `astro.config.mjs` now separates the cache by Astro command through `astro:config:setup`.

Validation: ran the production build while the development server remained running, then confirmed all direct client module imports returned HTTP 200. Reloaded the browser, waited for hydration, and verified appearance/language/tool switches, platform filters/search/empty recovery, installation selection, theme download, palette/file copying, FAQ disclosure, and mobile navigation. Saved Light appearance restored after reload. No new browser warnings or errors followed the repair. Updated captures are in `.impeccable/review/`; the Astro development toolbar visible in captures is absent from production output.
