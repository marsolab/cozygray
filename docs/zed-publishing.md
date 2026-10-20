# Publishing Cozy Gray to Zed

The theme-only extension lives in `extensions/zed`. Its ID is `cozy-gray-theme` and its initial version is `0.1.0`. Both appearances are generated from the website's exporter; the extension has no Rust, WebAssembly, language servers, or runtime dependencies. The MIT license applies to the extension directory.

## Validation record

On October 20, 2026, the package was installed through **Install Dev Extension** in Zed 1.24.3 on macOS. The Extensions view showed **Cozy Gray v0.1.0 (dev)** in the Themes category, and Theme Selector listed both appearances. Light and dark were each activated and visually checked with Go syntax and window chrome. Standalone user theme files were moved out of Zed's theme directory during this test. Both variants also passed the official JSON schema and generated-export parity checks. Markdown links had been visually checked in the preceding standalone light-theme validation; terminal ANSI roles are checked in generated data rather than claimed as a terminal interaction test.

## Release preparation

```sh
npm ci
npm run build:zed
npm run validate:themes
npm run validate:zed
npm run build
npm run validate:site
```

Install `extensions/zed` with Zed's **Install Dev Extension** action and check both appearances, including editor syntax, title bar, tabs, status bar, selections, Markdown links, and terminal colors. Temporarily move standalone Cozy Gray user theme files out of `~/.config/zed/themes` so they cannot mask the extension. Restore them afterward if retaining the manual installation.

Publish the tested commit on a branch of the public `marsolab/cozygray` repository. The registry must reference that exact commit, and its manifest version must match the registry version.

## Registry submission — human maintainer

Zed's [AI policy](https://github.com/zed-industries/extensions/blob/main/AI_POLICY.md) says: “Autonomous agents are not allowed to be used for contributing to this project.” It also requires the submitter to explain the work in their own words. A human maintainer must own the registry changes, submit the PR, and write its description and any review responses. The steps below are a technical guide, not a generated PR description.

Follow Zed's [publishing prerequisites](https://zed.dev/docs/extensions/publishing/prerequisites), [license requirements](https://zed.dev/docs/extensions/publishing/license-requirements), and [publishing guide](https://zed.dev/docs/extensions/publishing/publishing-guide).

1. Fork `zed-industries/extensions` to your personal GitHub account and clone your fork.
2. Create a branch for this one extension.
3. Add the public source repository as a submodule:

   ```sh
   git submodule add https://github.com/marsolab/cozygray.git extensions/cozy-gray-theme
   ```

4. In that submodule, check out the exact tested source release:

   ```sh
   git -C extensions/cozy-gray-theme checkout zed-v0.1.0
   ```

   Confirm this commit remains reachable from the source repository's public `main` branch. The tag identifies a source release prepared for submission, not an already published store listing.
5. Add this entry to the registry's `extensions.toml`:

   ```toml
   [cozy-gray-theme]
   submodule = "extensions/cozy-gray-theme"
   path = "extensions/zed"
   version = "0.1.0"
   ```

6. Run `pnpm install --frozen-lockfile` and `pnpm sort-extensions` in the registry checkout. Review the `.gitmodules` entry, submodule commit, and `extensions.toml` entry, then commit and push your branch.
7. Open the PR yourself and describe the extension and your testing in your own words. Follow its contribution checklist and respond to maintainer feedback.

The extension becomes available in Zed's Extensions view after registry maintainers accept and merge the submission and the registry packages it. Until then, keep website and README wording clear that store publication is pending.

## Updates

Regenerate the theme, bump `extensions/zed/extension.toml`, validate and test the new source commit, then publish it on a branch. A human maintainer updates the registry's submodule pointer and matching version and submits the update PR. The website's manual downloads remain generated from the same source palette.
