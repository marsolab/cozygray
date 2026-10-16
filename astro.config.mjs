import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    react(),
    {
      name: 'isolated-vite-cache',
      hooks: {
        'astro:config:setup': ({ command, updateConfig }) => {
          // Checks and builds must not replace a running dev server's prebundles.
          updateConfig({ vite: { cacheDir: `node_modules/.vite/astro-${command}` } });
        },
      },
    },
  ],
  vite: { plugins: [tailwindcss()] },
});
