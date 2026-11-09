// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fatturafacile.eu',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en', 'fr', 'de'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'it',
        locales: {
          it: 'it-IT',
          en: 'en-US',
          fr: 'fr-CH',
          de: 'de-CH',
        },
      },
      serialize(item) {
        const url = item.url;
        if (
          url === 'https://fatturafacile.eu/' ||
          /^https:\/\/fatturafacile\.eu\/(en|fr|de)\/$/.test(url)
        ) {
          return { ...item, changefreq: 'daily', priority: 1.0 };
        }
        if (/\/(funzionalita|moduli|versioni|perche)\/$/.test(url)) {
          return { ...item, changefreq: 'weekly', priority: 0.9 };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
