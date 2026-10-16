import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';
import { platforms, buildTheme } from '../src/theme.ts';
import { agentInstallPrompt, platformSlug, themeFilePath } from '../src/lib/agent-install.ts';

// Validate the built artifacts that crawlers and installation agents actually receive.
const html = await readFile('dist/index.html', 'utf8');
const site = 'https://cozygray.marsolab.com';
assert.match(html, /<h1[^>]*>A softer shade/);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
assert.match(html, /<link rel="canonical" href="https:\/\/cozygray.marsolab.com\/"/);
for (const property of ['og:title', 'og:description', 'og:url', 'og:image', 'og:image:alt']) {
  assert.match(html, new RegExp(`<meta property="${property}" content="[^"]+"`));
}
assert.match(html, /name="twitter:card" content="summary_large_image"/);
const structured = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
assert.equal(structured['@graph'].find(item => item['@type'] === 'WebPage').url, `${site}/`);
const image = await sharp('dist/og/cozy-gray.jpg').metadata();
assert.equal(image.width, 1200);
assert.equal(image.height, 630);
assert.match(await readFile('dist/robots.txt', 'utf8'), /Sitemap: https:\/\/cozygray.marsolab.com\/sitemap.xml/);
assert.match(await readFile('dist/sitemap.xml', 'utf8'), /<loc>https:\/\/cozygray.marsolab.com\/<\/loc>/);

for (const platform of platforms) {
  const guide = await readFile(`dist/install/${platformSlug(platform)}.md`, 'utf8');
  for (const mode of ['light', 'dark']) {
    const path = themeFilePath(platform, mode);
    const content = await readFile(`dist${path}`, 'utf8');
    assert.equal(content, buildTheme(platform.format || 'palette', mode).content);
    assert.ok(guide.includes(`${site}${path}`));
    const prompt = agentInstallPrompt(platform, mode);
    assert.ok(prompt.includes(`${site}${path}`));
    assert.ok(prompt.includes(platform.name));
    if (platform.format) {
      assert.match(prompt, /Back up existing configuration/);
      assert.match(prompt, /If you cannot access my machine/);
    } else {
      assert.match(prompt, /A native port is planned, not available/);
      assert.match(prompt, /Do not treat the palette JSON as an installable theme/);
    }
  }
}
console.log(`Site checks passed: SEO, 1200×630 OG image, and light/dark agent resources for ${platforms.length} tools.`);
