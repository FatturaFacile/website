import { it } from './locales/it';
import { en } from './locales/en';
import { fr } from './locales/fr';
import { de } from './locales/de';
import type { Locale, SiteTranslations } from './types';

export const locales: Record<Locale, SiteTranslations> = { it, en, fr, de };
export const defaultLocale: Locale = 'it';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in locales) return lang as Locale;
  return defaultLocale;
}

export function useTranslations(lang: Locale): SiteTranslations {
  return locales[lang] || locales[defaultLocale];
}

export function getLocalizedPath(pathname: string, targetLang: Locale | string): string {
  const validLang: Locale = targetLang in locales ? (targetLang as Locale) : defaultLocale;
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in locales) {
    segments.shift();
  }
  const cleanPath = segments.join('/');
  if (validLang === defaultLocale) {
    return cleanPath ? `/${cleanPath}/` : '/';
  }
  return `/${validLang}/${cleanPath ? cleanPath + '/' : ''}`;
}
