---
name: "Cozy Gray"
description: "Warm gray editor and terminal palettes presented as a quiet, live workspace."
colors:
  neutral-action: "#d0cbc5"
  neutral-action-ink: "#39342f"
  neutral-action-hover: "#c2bab2"
  site-paper: "#eeedeb"
  site-ink: "#333231"
  site-muted: "#605d59"
  site-surface: "#e2e0dd"
  site-stage: "#dad8d5"
  site-dark-bg: "#262525"
  site-dark-ink: "#e7e4e0"
  site-dark-muted: "#b6b0aa"
  site-dark-surface: "#302e2d"
  site-dark-stage: "#3b3836"
  dark-background: "#292827"
  dark-surface: "#33312f"
  dark-foreground: "#e7e2db"
  dark-muted: "#aaa39b"
  dark-keyword: "#f0ab91"
  dark-string: "#e6c078"
  dark-function: "#f2d4a5"
  dark-type: "#dab0c5"
  dark-error: "#f09b9b"
  dark-selection: "#514941"
  light-background: "#eae7e3"
  light-surface: "#dedad5"
  light-foreground: "#393430"
  light-muted: "#6e655e"
  light-keyword: "#a1432d"
  light-string: "#86600d"
  light-function: "#8b542b"
  light-type: "#904769"
  light-error: "#b1353f"
  light-selection: "#d0c5ba"
typography:
  display:
    fontFamily: "'Geist Variable', sans-serif"
    fontSize: "clamp(52px, 7.1vw, 100px)"
    fontWeight: 430
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "'Geist Variable', sans-serif"
    fontSize: "clamp(38px, 4.3vw, 62px)"
    fontWeight: 450
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  title:
    fontFamily: "'Geist Variable', sans-serif"
    fontSize: "25px"
    fontWeight: 450
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Geist Variable', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Geist Variable', sans-serif"
    fontSize: "13px"
    fontWeight: 400
  action:
    fontFamily: "'Geist Variable', sans-serif"
    fontSize: "14px"
    fontWeight: 550
  code:
    fontFamily: "'Geist Mono Variable', monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
  code-mobile:
    fontFamily: "'Geist Mono Variable', monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  control-small: "4px"
  control: "5px"
  panel: "6px"
  workspace: "7px"
  closing: "8px"
  stage: "10px"
spacing:
  switch-gap: "3px"
  switch-inset: "4px"
  control-gap: "8px"
  item-gap: "14px"
  mobile-gutter: "20px"
  panel-inset: "30px"
  section-heading-gap: "50px"
  principle-gap: "75px"
  section-desktop: "155px"
  section-mobile: "100px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-action}"
    textColor: "{colors.neutral-action-ink}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
    typography: "{typography.action}"
    height: "49px"
  button-primary-hover:
    backgroundColor: "{colors.neutral-action-hover}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.site-ink}"
    padding: "5px 0"
    typography: "{typography.action}"
  mode-switch:
    backgroundColor: "{colors.site-surface}"
    rounded: "{rounded.panel}"
    padding: "4px"
  mode-selected:
    backgroundColor: "{colors.site-ink}"
    textColor: "{colors.site-paper}"
    rounded: "{rounded.control-small}"
    padding: "8px 13px"
    typography: "{typography.label}"
  search-field:
    backgroundColor: "{colors.site-paper}"
    textColor: "{colors.site-muted}"
    rounded: "{rounded.control-small}"
    padding: "10px 14px"
    width: "220px"
    typography: "{typography.label}"
  platform-select:
    backgroundColor: "{colors.site-surface}"
    textColor: "{colors.site-ink}"
    rounded: "{rounded.control}"
    padding: "16px 17px"
  install-panel:
    backgroundColor: "{colors.site-surface}"
    rounded: "{rounded.panel}"
    padding: "30px"
  preview-stage:
    backgroundColor: "{colors.site-stage}"
    rounded: "{rounded.stage}"
    padding: "24px 26px 0"
  swatch:
    rounded: "{rounded.control-small}"
    height: "120px"
  navigation:
    height: "110px"
    typography: "{typography.label}"
---

# Design System: Cozy Gray

## Overview

**Creative North Star: "The Warm Gray Workspace"**

Cozy Gray uses warm off-gray fields, graphite text, quiet taupe actions, and readable code to make a developer workspace feel quiet and familiar. Broad spacing and soft, compact controls carry the presentation; the theme itself supplies the color. The name above describes the implemented world and is not a user-approved creative concept.

This records the current code-first implementation: Astro serves `src/pages/index.astro`, React hydrates `src/App.tsx` with `client:load`, and official shadcn/ui Button, ToggleGroup, and Select components use Tailwind CSS v4 semantic integration. The user confirmed this stack and code-first workflow, then requested less green and brighter syntax. Geist was selected through the explicitly invoked gpt-taste workflow. The earlier sage-led palette and unanswered-stack status are superseded. There is no approved visual comp; this record does not imply a concept-selection workflow. The revision is verified in the browser at desktop (1440px), mobile (390px), and intermediate (890px) widths without document overflow. Current captures in `.impeccable/review/` cover both theme appearances and the dark website appearance. Browser checks confirm hydrated controls, Python switching, Editor/Terminal view, filters/search and empty-state recovery, platform selection, Ghostty download, palette copy, tmux source disclosure/copy, FAQ, mobile navigation, website mode, and saved Light restoration after reload. Astro build and source assertions for palette contrast/parity and static server-rendered output pass; browser checks show no post-fix warnings or errors. These checks do not establish native target-application validation. The revision detector reports the pre-existing Geist warning and type-ramp advisory; Geist remains the explicitly selected font.

**Key Characteristics:**
- Neutral warm gray surfaces with brighter amber, coral, sand, and rose syntax roles.
- Independent website and downloaded-theme appearances.
- Wide editorial headings with compact native workspace fragments.
- One generated material photograph, paired with live illustrative code.
- Flat tonal depth, quiet motion, and a static reduced-motion composition.

## Colors

The normative frontmatter records the website neutrals and both complete theme palettes in their source hex format. `src/theme.ts` owns downloadable palette roles; the corresponding `--code-*` variables in `src/style.css` render the same roles. Website variables are a separate system.

### Primary

Neutral taupe supplies filled calls to action; dark taupe ink keeps the label legible and the deeper taupe hover supplies feedback. This action treatment remains stable in both website appearances. The page foundation is neutral warm gray without the former green cast.

### Secondary

Syntax carries the brighter color: Coral/Copper for keywords, Sand/Bronze for functions, Amber/Ochre for strings, and rose for types. Clay/Earth supplies the error role. The first name of each pair belongs to dark mode and the second to light mode. Dark syntax is lighter and more colorful against graphite; light syntax uses deeper warm counterparts against stone. These are functional code roles, not extra website action colors.

### Neutral

The website paper/ink/muted/surface/stage family supplies the default light site; its dark family swaps those five roles when the website moon/sun button is used. These page surfaces do not follow the theme mode.

Theme Dark uses Graphite background, Soft charcoal surface, Chalk foreground, and Pebble secondary text. Theme Light uses Stone background, Silver surface, Ink foreground, and Slate secondary text. Each mode has its own warm selection field.

The frontmatter’s `site-muted` and `site-dark-muted` names describe secondary text and map to `--text-secondary`; they do not map to `--muted`. In shadcn semantics, `--muted` is the surface field and `--muted-foreground` maps to `--text-secondary`. Tailwind’s inline theme binds background/foreground to page/ink, primary to taupe action, secondary/card/popover/muted to surface, accent/border/input to stage, and ring to ink. These semantic bindings inherit both website appearances; they do not change the independently selected code palette.

**The Two Appearances Rule.** Website appearance is independent of the shared light/dark theme selection. Theme controls update the preview, swatches, and generated download together.

## Typography

**Display and Body Font:** Geist Variable, with sans-serif fallback. **Code Font:** Geist Mono Variable, with monospace fallback. Both are locally imported font packages. The proportional family provides calm editorial hierarchy; the monospace family belongs to code and generated files.

The frontmatter records the actual desktop roles: display for the hero, headline for section titles, title for principle headings, body for reading, label for supporting controls, action for calls to action, and code for the live workspace. This is an observed hierarchy rather than a fixed-ratio type scale. The final reading-scale rules in the stylesheet override earlier declarations: main descriptive copy, FAQ answers, and installation steps use body size and site ink. Ordinary paragraphs use body leading; installation steps and FAQ answers use their more open local leading.

At widths up to 760px, section headlines become (42px), principle titles become (23px), and the hero uses `clamp(48px, 8.1vw, 61px)`. At widths up to 430px the hero is (50px). Closing headlines use a distinct desktop clamp and mobile `clamp(42px, 7.5vw, 52px)`, settling at (42px) on the narrowest layout.

Compact native-interface exceptions are deliberate: editor code is (13px) desktop and (11px) mobile; window, tree, tabs, and language controls are mostly (11px) desktop, with status text (10px). Mobile simulated chrome is (9–11px). Mini-code stays (13px). The decorative, aria-hidden minimap is (3px). These represent editor density, never general page copy.

**The Reading Scale Rule.** Use the body role for reading copy. Compact code and simulated editor chrome remain local exceptions rather than a scale for new prose.

## Layout

A centered container caps at (1280px), with (56px) side gutters. At widths up to 1100px those gutters become (32px); at widths up to 760px they become (20px). Desktop navigation is (110px) high and mobile navigation is (85px). The hero is a two-column (1.45fr/1fr) arrangement with a broad left headline; the material passage, principles, install section, and FAQ also use two columns with generous whitespace. Section rhythm ranges around (105–155px) on desktop and (60–100px) on mobile rather than imposing a new arithmetic scale.

At widths up to 1100px columns tighten and the code minimap disappears. At widths up to 760px content sections stack, the file tree disappears, code remains horizontally scrollable, the palette changes from eight columns to four, search expands to full width, and the final platform-grid override produces one column. Platform names, details, and Planned/arrow status remain visible. At widths up to 430px desktop navigation becomes a toggled surface below the header. At widths from 1600px, the hero gains top space and the editor gains height.

Motion uses GSAP matchMedia: entrances and reveals move by (22–36px), run for (1–1.3s), and use expo.out; the material photograph scrubs a small vertical shift and scale. The principle title pins only from (1000px) and only without reduced motion. Match-media and context cleanup remove pinning and animation styles when conditions change. Reduced motion removes transitions, cursor blink, scrubbing, pinning, and animated transforms; content remains visible in static composition and page scrolling becomes immediate.

## Elevation & Depth

Depth comes from tonal fields: page, section surface, preview stage, and workspace surface. Controls are flat at rest. The interactive editor window uses a soft offset shadow to separate it from the preview stage. Other page surfaces remain flat. Shadcn controls may use a focus-visible ring, which is an accessibility state rather than surface elevation. The single conceptual material photograph supplies physical light and texture; it is not a customer artifact. Its caption is a locally fixed light panel that does not invert with site appearance. Code surfaces retain their own selected palette.

**The Tonal Depth Rule.** Separate fields with warm surface tones and spacing; use soft elevation only for the editor preview and ring shadows for interactive focus.

## Shapes

Use gently rounded rectangular controls, with the radius roles in frontmatter. The shadcn base `--radius` is (0.625rem), while existing authored control and panel radii retain their explicit values; do not replace the delivered shapes with library defaults. The preview stage is the softest large container; the workspace has an 8px radius on all four corners. Swatches are compact flat blocks. Icon buttons, appearance indicators, window dots, and step markers are circular. Rounded surfaces come from actual controls and material framing, not a repeated card grid. The supplied brand mark uses open circular linework; other icons are stroked SVGs.

## Components

### Buttons

Filled taupe actions use the official shadcn Button with authored primary styling and an inline SVG arrow/download/check. Hero and closing links use `asChild` so their anchor semantics remain intact; the download remains a button. The authored styles supply the delivered size, fill, spacing, and radius rather than the library’s uncustomized defaults. Hover changes the fill and lifts by (2px); press moves by (1px). Text links stay unfilled and animate their arrow. Icon buttons use a circular surface hover. Interactive elements use a (2px) site-ink focus outline with (5px) offset. Shadcn Button and ToggleGroup also supply a (3px) ink ring at half opacity on focus-visible, plus inherited disabled/invalid state support; those states are library capabilities, not additional flows shown on this page. The search input removes its own outline; its parent field supplies a (2px) site-ink ring with (4px) offset through `:focus-within`. This preserves visible focus for input and clear-button interaction.

### Appearance and filter controls

Segmented controls use a surface field, compact inset, and ink-filled selected segment with reversed page-color text. Appearance, Editor/Terminal view, preview language, and platform filters use official shadcn/Radix single ToggleGroup controls. Their `data-state="on"` drives selected styling while `aria-pressed` exposes state. Selection handlers reject empty values, preserving one active option per group. Theme mode is persisted to localStorage under `cozy-gray-appearance`, defaults to dark, and is shared by all theme switches. Website appearance starts light and is separate. Editor/terminal view, preview language, and platform category are local controls; category and search jointly filter the same grid.

### Inputs / Fields

Platform search is a flat page-tone field with an inline search SVG and a conditional clear button. Its desktop width is defined in frontmatter and becomes full width on mobile. Tool selection uses an official shadcn/Radix Select with a surface-tone button trigger and a custom popup. The popup inherits the website appearance through a portal inside the site root, matches the trigger width, and caps height at 360px or available viewport space. Editors, Terminals, and More tools are labeled groups. Items provide a selected checkmark, inverse highlighted state, scrolling, arrow-key navigation, typeahead, and Escape dismissal. Selection updates the instructions, file name, and generated content. Native dropdown presentation is not used.

### Navigation

The wordmark, three section anchors, website-appearance button, and direct theme link share a single row. Anchor hover fades opacity over (0.2s). The theme link is hidden on mobile; the smallest breakpoint uses the menu button with `aria-expanded`. A skip link becomes visible on focus. Footer navigation repeats the main task anchors.

### Palette swatches

Eight labeled buttons show a theme role and its exact hex. Hover lifts the color block by (6px); hover/focus reveals the copy SVG. Clicking copies the selected hex and announces success in a polite live region for (1800ms), with a manual-selection message on failure. Their tabular hex values remain readable when the theme switches.

### Workspace and material passage

The editor is a live DOM fragment, not a screenshot. TypeScript, Python, and Rust sample switching is illustrative; Editor/Terminal switching changes the displayed fragment. Keep the visible illustrative-examples disclosure. Window controls and file-tree decoration are not represented as working desktop controls. Code and terminal text are not evidence of a published package. The generated material photograph is `public/assets/gray-stones.webp`, with a descriptive alt and retained provenance; it supplies material atmosphere while code performs the product demonstration. Its sage leaf is an image detail, not a green UI accent or syntax token.

### Platform rows and install panel

Tool rows are quiet, unboxed selectors with an icon tile, name, detail, and status. Hover translates the row by (5px). Native-format rows show an arrow; unsupported native ports show Planned. Every row selects that tool and scrolls to installation. Authored native configurations can be downloaded for supported format keys; planned ports produce a clearly labeled palette reference. Files are generated in-browser, with mode-specific names, instructions, source disclosure, and copy action. Download success updates the label; changing mode/tool resets it. Preserve “App validation is still in progress” and the FAQ limitation: these files have not all been tested inside their respective applications.

The install panel uses a flat surface with numbered circular steps. File disclosure uses native details; source has a bounded scrolling area. FAQ rows also use native details with a one-open group and a stroked plus that becomes a minus. No account, email, or fabricated adoption proof is part of this flow.

## Do's and Don'ts

### Do:
- Do keep the shared theme mode consistent across preview, palette, and download.
- Do retain visible Planned labels and the app-validation limitation beside platform choices.
- Do preserve the illustrative-code disclosure and the generated photograph’s provenance.
- Do keep reading and installation copy at the body scale; allow horizontal scrolling for code.
- Do preserve focus outlines, semantic control states, and the reduced-motion static layout.

### Don't:
- Don't treat website appearance as the downloaded palette selection.
- Don't present authored files as validated native integrations or marketplace releases.
- Don't make medical or display-emission claims from the gray palette.
- Don't extend compact editor-chrome text sizes to reading copy.
- Don't reintroduce a green cast to the page surfaces or use sage as the action/syntax palette.
- Don't replace the warm neutral foundation with blue-dominant backgrounds or vivid blue syntax.


### Brand mark

The generated `public/assets/cozy-gray-logo.png` combines a softly squared C with a terminal block cursor. It replaces the original inline double-C mark in the header, closing section, and footer. A CSS alpha mask follows `currentColor` in both website appearances; the original transparent PNG also serves as the favicon. Exact prompt and provenance live in `design/cozy-gray-logo.prompt.txt` and `design/cozy-gray-logo.provenance.json`.


### Editor preview separation

The interactive editor window has a complete 8px corner radius and a soft two-layer shadow, including beneath the language bar. This separates the light editor chrome from its gray presentation stage without changing exported theme colors. The shadow is deeper against the dark website surface.


### Painted preview backdrop

The preview stage uses the generated `public/assets/preview-brushwork.webp`: broad, rough warm-gray brush strokes with visible bristle texture. The image covers the stage, with 40px side insets on desktop and 18px on mobile to expose the painting around the opaque editor. Dark website appearance multiplies the painting with a warm gray tint. Toolbar labels and captions use solid page-colored backings for consistent contrast; theme colors and the editor shadow remain unchanged. Prompt and provenance are saved in `design/preview-brushwork.prompt.txt` and `design/preview-brushwork.provenance.json`.

### Agent handoff and social sharing

The user-supplied AskAI mascot and provider picker sit beside the download action. Solid warm-gray surfaces, persistent provider labels, keyboard focus, and inherited site appearance keep the popover readable on desktop and mobile. It presents a reviewable installation prompt for the selected tool and appearance, with different wording for planned ports. Reduced-motion preferences disable the mascot animation.

The agent-install action is the main hero CTA and also appears beside the download action. It uses charcoal with light text in the light website appearance and reverses those neutral colors in dark mode. The mascot uses a translucent backing. Downloads retain the softer neutral treatment. A compact GitHub/Star button in the header links to the public repository, with icon-only treatment on mobile. The picker contains ChatGPT, Claude, Cursor, and Antigravity, with a copy-and-paste handoff for Antigravity.

The social sharing card pairs the logo and “A softer shade of focus” headline with rough brushwork and overlapping light/dark editor illustrations. It is served as a 1200×630 JPEG at `/og/cozy-gray.jpg` and referenced by Open Graph and Twitter metadata.
