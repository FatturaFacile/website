import type { Locale } from './types.ts';

/** Labels used only by assistive technologies (skip link, visually hidden status text). */
export interface A11yLabels {
  skipToContent: string;
  compliant: string;
  required: string;
}

export const a11yLabels: Record<Locale, A11yLabels> = {
  it: {
    skipToContent: 'Vai al contenuto principale',
    compliant: 'conforme',
    required: 'campo obbligatorio',
  },
  en: {
    skipToContent: 'Skip to main content',
    compliant: 'compliant',
    required: 'required field',
  },
  fr: {
    skipToContent: 'Aller au contenu principal',
    compliant: 'conforme',
    required: 'champ obligatoire',
  },
  de: {
    skipToContent: 'Zum Hauptinhalt springen',
    compliant: 'konform',
    required: 'Pflichtfeld',
  },
};
