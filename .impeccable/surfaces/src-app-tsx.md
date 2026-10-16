---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: ["src/pages/index.astro", "src/style.css", "src/theme.ts", "src/components/ui/button.tsx", "src/components/ui/toggle-group.tsx"]
---

# Home landing page
Mode: Persuade. Developers evaluate the two palettes and download an authored theme format. All platform families from the reference remain discoverable. Marketplace publication and app validation are open.

## Direction contract
THESIS: Cozy Gray's material palette becomes a live workspace; real syntax replaces marketing proof. Avoid the neon-theme launch template.
OWN-WORLD: neutral warm-gray canvas without a green cast, graphite ink, taupe actions, brighter amber/coral/sand/rose syntax, broad quiet fields; Geist type, native editor/terminal typography, small rounded controls. No ornamental gradients or chrome.
STORY: understand that it is a gray editor/terminal theme, compare its two versions, inspect tokens, find a tool, download its exact palette format.
FIRST VIEWPORT: plain navigation above a broad responsive two-line left headline, copy and action on the right, then a large readable native code fragment on a gray stage. A single light/dark control changes preview and palette. Main action is reachable immediately.
FORM: industrial design material library, grounded candidate 3, concept seed 0caa486e. Taste direction product-performs, seed 1472771767. Signature interaction is the paired light/dark workspace; desktop material passage pins its title while code samples stack. Reduced motion uses static composition.
BUILD: user-confirmed Astro + React + shadcn/ui + Tailwind CSS v4, implemented directly in code. Astro renders the route with the React App hydrated via client:load; appearance, Editor/Terminal view, preview language, and platform filters use ToggleGroup with data-state=on styling; primary actions use Button. The earlier seeds describe implementation provenance, not an approved comp or concept-selection workflow.
ARCHITECTURE: `astro.config.mjs` isolates Vite cache directories by Astro command (`dev`, `build`, `sync`). This repairs the reproduced hydration failure where checks/builds replaced a running dev server’s prebundles and client imports returned HTTP 504. Building while dev runs now leaves client imports at HTTP 200 and controls functional.
FINISH: current revision passed browser verification at desktop 1440px, mobile 390px, and intermediate 890px without document overflow. Captures: `.impeccable/review/desktop.png`, `desktop-light.png`, `desktop-site-dark.png`, `mobile.png`, `mobile-light.png`, and `user-current.png`. Verified controls: theme appearance, Python language, Editor/Terminal, filters/search/empty recovery to 25 entries, platform selection, Ghostty download, palette copy, tmux theme-source disclosure/copy, FAQ, mobile menu, website appearance, and saved Light restoration after reload. No post-fix browser warnings/errors; reviewer found no material visual defect. Rust has not received a browser switching check. Retain generated-raster provenance and authored-download/native-app-validation limitations.

TOOL PICKER: Custom shadcn/Radix Select; no native dropdown presentation. Grouped scrollable popup inherits website light/dark appearance. Pointer selection, arrow keys, typeahead, and Escape dismissal are verified; mobile width is bounded to the viewport.
