import type { SiteTranslations } from '../types.ts';
import { defineSiteTranslations } from '../../utils/i18n-helper.ts';
import frJson from './fr.json' with { type: 'json' };

export const fr: SiteTranslations = defineSiteTranslations(frJson);
