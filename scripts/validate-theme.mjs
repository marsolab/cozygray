import assert from 'node:assert/strict';
import { palettes, platforms, buildTheme, installSteps } from '../src/theme.ts';
const luminance = hex => {
  const [r,g,b] = hex.match(/[0-9a-f]{2}/gi).map(value => parseInt(value, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return .2126*r + .7152*g + .0722*b;
};
for (const [mode, palette] of Object.entries(palettes)) {
  for (const role of ['foreground','muted','keyword','string','function','type','error']) {
    const a = luminance(palette.background), b = luminance(palette[role]);
    assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05) >= 4.5, `${mode}: ${role} must have AA contrast`);
  }
  for (const platform of platforms) {
    const file = buildTheme(platform.format || 'palette', mode);
    assert.ok(file.content.length > 50, `${platform.name}: missing theme content`);
    assert.ok(installSteps(platform,mode).length > 0, `${platform.name}: missing instructions`);
    if (file.filename.endsWith('.json')) JSON.parse(file.content);
    if (!platform.format) assert.match(file.content, /native port not yet implemented/);
    if (platform.format === 'ghostty') assert.equal((file.content.match(/^palette = /gm) || []).length,16);
    if (platform.format === 'tmux') {
      const options = [...file.content.matchAll(/^set -g ([a-z-]+)/gm)].map(match => match[1]);
      assert.deepEqual(options, ['status-style','pane-border-style','pane-active-border-style','message-style','mode-style']);
    }
    if (platform.format === 'vscode') assert.equal(JSON.parse(file.content).colors['editor.background'],palette.background);
    if (platform.format === 'codex') {
      // The desktop importer requires a share string and rejects mismatched variants.
      assert.equal(file.filename, `cozy-gray-${mode}.codex-theme`);
      assert.ok(file.content.startsWith('codex-theme-v1:'));
      const share = JSON.parse(file.content.slice('codex-theme-v1:'.length));
      assert.equal(share.variant, mode);
      assert.equal(share.codeThemeId, 'gruvbox');
      const { theme } = share;
      assert.equal(theme.surface, palette.background);
      assert.equal(theme.ink, palette.foreground);
      assert.equal(theme.accent, palette.string);
      assert.equal(theme.accentSource, 'custom');
      assert.equal(theme.opaqueWindows, true);
      assert.deepEqual(theme.fonts, { code: null, ui: null });
      assert.ok(Number.isInteger(theme.contrast) && theme.contrast >= 0 && theme.contrast <= 100);
      assert.deepEqual(Object.keys(theme.semanticColors).sort(), ['diffAdded', 'diffRemoved', 'skill']);
      for (const color of [theme.accent, theme.surface, theme.ink, ...Object.values(theme.semanticColors)]) {
        assert.match(color, /^#[0-9a-fA-F]{6}$/);
      }
      assert.notEqual(theme.semanticColors.diffAdded, theme.semanticColors.diffRemoved);
      assert.match(installSteps(platform, mode).join('\n'), /not a Codex CLI theme/);
    }
  }
}
console.log(`Both palettes pass 4.5:1 syntax contrast; downloads and instructions validated for ${platforms.length} platform entries.`);
