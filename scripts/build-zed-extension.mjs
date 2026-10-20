import assert from 'node:assert/strict';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { buildTheme } from '../src/theme.ts';

const extension = new URL('../extensions/zed/', import.meta.url);
const themePath = new URL('themes/cozy-gray.json', extension);
const family = {
  $schema: 'https://zed.dev/schema/themes/v0.2.0.json',
  name: 'Cozy Gray',
  author: 'Marsolab',
  themes: ['light', 'dark'].map(mode => JSON.parse(buildTheme('zed', mode).content).themes[0]),
};
const content = `${JSON.stringify(family, null, 2)}\n`;

if (process.argv.includes('--check')) {
  assert.equal(await readFile(themePath, 'utf8'), content, 'Packaged Zed theme is stale. Run npm run build:zed.');
  const manifest = await readFile(new URL('extension.toml', extension), 'utf8');
  assert.match(manifest, /^id = "cozy-gray-theme"$/m);
  assert.match(manifest, /^version = "\d+\.\d+\.\d+"$/m);
  assert.match(manifest, /^schema_version = 1$/m);
  assert.match(manifest, /^themes = \["themes\/cozy-gray\.json"\]$/m);
  assert.match(await readFile(new URL('LICENSE', extension), 'utf8'), /^MIT License\n/);
  assert.deepEqual((await readdir(extension)).sort(), ['LICENSE', 'README.md', 'extension.toml', 'themes']);
  assert.deepEqual(await readdir(new URL('themes/', extension)), ['cozy-gray.json']);
  assert.deepEqual(family.themes.map(theme => theme.name), ['Cozy Gray Light', 'Cozy Gray Dark']);
  console.log('Zed extension validated: manifest, MIT license, light/dark export parity, and theme-only package.');
} else {
  await mkdir(new URL('themes/', extension), { recursive: true });
  await writeFile(themePath, content);
  console.log('Generated extensions/zed/themes/cozy-gray.json with both appearances.');
}
