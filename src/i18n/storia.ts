import type { Locale, SeoMetadata, StoriaTranslations } from './types.ts';
import storiaJson from './storia.json' with { type: 'json' };

export interface StoriaArchitecturePillar {
  id: string;
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
}

export interface StoriaEthicalCard {
  id: string;
  badge: string;
  title: string;
  desc: string;
  linkHref: string;
  linkLabel: string;
}

export interface StoriaMilestone {
  year: string;
  phase: string;
  title: string;
  desc: string;
  badge: string;
}

export interface DetailedStoriaTranslations extends StoriaTranslations {
  seo: SeoMetadata;
  hero: {
    eyebrow: string;
    headingPart1: string;
    headingHighlight: string;
    lead: string;
    badgeDualMarket: string;
    badgeOpenSource: string;
    ctaModules: string;
    ctaCommunity: string;
    ctaDownload: string;
  };
  origin: {
    badge: string;
    heading: string;
    lead: string;
    problemTitle: string;
    problemText: string;
    antiSaasTitle: string;
    antiSaasText: string;
    quote: {
      text: string;
      author: string;
      role: string;
    };
    comparison: {
      erpTitle: string;
      erpPoints: string[];
      ffTitle: string;
      ffPoints: string[];
    };
  };
  architecture: {
    badge: string;
    heading: string;
    lead: string;
    pillars: StoriaArchitecturePillar[];
  };
  ethics: {
    badge: string;
    heading: string;
    lead: string;
    cards: StoriaEthicalCard[];
  };
  chronicle: {
    badge: string;
    heading: string;
    lead: string;
    milestones: StoriaMilestone[];
  };
  ctaBanner: {
    heading: string;
    subtitle: string;
    btnModules: string;
    btnCommunity: string;
    btnDownload: string;
  };
}

export const STORIA_ALTERNATES: Record<Locale | 'x-default', string> = {
  it: 'https://fatturafacile.eu/storia/',
  en: 'https://fatturafacile.eu/en/storia/',
  fr: 'https://fatturafacile.eu/fr/storia/',
  de: 'https://fatturafacile.eu/de/storia/',
  'x-default': 'https://fatturafacile.eu/storia/',
};

export const STORIA_OG_LOCALES: Record<Locale, string> = {
  it: 'it_IT',
  en: 'en_US',
  fr: 'fr_CH',
  de: 'de_CH',
};

export const STORIA_TRANSLATIONS: Record<Locale, DetailedStoriaTranslations> = storiaJson;
