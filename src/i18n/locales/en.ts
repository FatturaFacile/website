import type { SiteTranslations } from '../types.ts';
import { defineSiteTranslations } from '../../utils/i18n-helper.ts';
import enJson from './en.json' with { type: 'json' };

export const en: SiteTranslations = defineSiteTranslations(enJson);
