import type { Locale, SiteTranslations } from '../i18n/types.ts';

export const SUPPORTED_LOCALES: readonly Locale[] = ['it', 'en', 'fr', 'de'] as const;
export const NON_DEFAULT_LOCALES: readonly Locale[] = ['en', 'fr', 'de'] as const;

/**
 * Type-safe identity helper for defining locale translation dictionaries.
 */
export function defineSiteTranslations(dictionary: SiteTranslations): SiteTranslations {
  return dictionary;
}

/**
 * Generates Astro `getStaticPaths()` entries for all supported locales (`it`, `en`, `fr`, `de`).
 */
export function getAllLocaleStaticPaths(): Array<{ params: { lang: Locale } }> {
  return SUPPORTED_LOCALES.map((lang) => ({ params: { lang } }));
}

/**
 * Generates Astro `getStaticPaths()` entries for non-default locales (`en`, `fr`, `de`).
 */
export function getNonDefaultLocaleStaticPaths(): Array<{ params: { lang: Locale } }> {
  return NON_DEFAULT_LOCALES.map((lang) => ({ params: { lang } }));
}

/**
 * Extracts up to 2 uppercase initials from a person's full name.
 */
export function getInitials(fullName: string): string {
  return fullName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
