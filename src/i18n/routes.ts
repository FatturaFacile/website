import type { Locale } from './types';

/**
 * Slug per lingua di ogni pagina. La chiave è lo slug italiano (canonico).
 * Le pagine italiane restano alla radice, le altre vivono sotto /{lang}/.
 */
export const ROUTE_SLUGS = {
  funzionalita: { it: 'funzionalita', en: 'features', fr: 'fonctionnalites', de: 'funktionen' },
  perche: { it: 'perche', en: 'why-us', fr: 'pourquoi-nous', de: 'warum-wir' },
  moduli: { it: 'moduli', en: 'modules', fr: 'modules', de: 'module' },
  versioni: { it: 'versioni', en: 'versions', fr: 'versions', de: 'versionen' },
  storia: { it: 'storia', en: 'story', fr: 'histoire', de: 'geschichte' },
  team: { it: 'team', en: 'team', fr: 'equipe', de: 'team' },
  contribuisci: { it: 'contribuisci', en: 'contribute', fr: 'contribuer', de: 'mitmachen' },
  sponsor: { it: 'sponsor', en: 'sponsor', fr: 'sponsor', de: 'sponsor' },
  privacy: { it: 'privacy', en: 'privacy', fr: 'confidentialite', de: 'datenschutz' },
  'supporto-locale': {
    it: 'supporto-locale',
    en: 'local-support',
    fr: 'soutien-local',
    de: 'lokale-unterstuetzung',
  },
  'scuole-e-sociale': {
    it: 'scuole-e-sociale',
    en: 'schools-and-social',
    fr: 'ecoles-et-social',
    de: 'schulen-und-soziales',
  },
  community: { it: 'community', en: 'community', fr: 'communaute', de: 'community' },
  'community-richieste': {
    it: 'community-richieste',
    en: 'community-requests',
    fr: 'communaute-demandes',
    de: 'community-anfragen',
  },
  faq: { it: 'faq', en: 'faq', fr: 'faq', de: 'faq' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof ROUTE_SLUGS;

export const ROUTE_KEYS = Object.keys(ROUTE_SLUGS) as RouteKey[];

/** Trova la chiave canonica di uno slug in una data lingua (o in qualunque lingua). */
export function findRouteKey(slug: string, lang?: Locale): RouteKey | undefined {
  return ROUTE_KEYS.find((key) => {
    const slugs: Record<Locale, string> = ROUTE_SLUGS[key];
    return lang ? slugs[lang] === slug : Object.values(slugs).includes(slug);
  });
}

/** Chiave della pagina corrente a partire dal pathname (undefined per la home). */
export function getRouteKeyFromPath(pathname: string): RouteKey | undefined {
  const segments = pathname.split('/').filter(Boolean);
  if (['en', 'fr', 'de'].includes(segments[0])) segments.shift();
  return segments[0] ? findRouteKey(segments[0]) : undefined;
}
