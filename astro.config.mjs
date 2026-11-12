// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { ROUTE_SLUGS } from './src/i18n/routes.ts';

// Vecchi URL en/fr/de con slug italiano -> nuovo URL tradotto (meta refresh + canonical)
const legacyRedirects = Object.fromEntries(
  Object.entries(ROUTE_SLUGS).flatMap(([italian, slugs]) =>
    ['en', 'fr', 'de']
      .filter((lang) => /** @type {Record<string,string>} */ (slugs)[lang] !== italian)
      .map((lang) => [
        `/${lang}/${italian}/`,
        `/${lang}/${/** @type {Record<string,string>} */ (slugs)[lang]}/`,
      ]),
  ),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://fatturafacile.eu',
  output: 'static',
  trailingSlash: 'always',
  redirects: legacyRedirects,
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
          return {
            ...item,
            priority: 1.0,
          };
        }

        if (/\/(funzionalita|moduli|versioni|perche|features|modules|versions|why-us|fonctionnalites|pourquoi-nous|funktionen|module|versionen|warum-wir)\/$/.test(url)) {
          return {
            ...item,
            priority: 0.9,
          };
        }

        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
