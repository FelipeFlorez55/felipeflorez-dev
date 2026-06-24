// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://felipeflorez.dev',
  // English is the default (served at /), Spanish at /es/. Browser-language detection
  // + a manual toggle (persisted) live client-side — see src/layouts/BaseLayout.astro
  // and src/components/LanguageToggle.astro.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: { inlineStylesheets: 'auto' },
});
