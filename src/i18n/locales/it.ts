import type { SiteTranslations } from '../types.ts';
import { defineSiteTranslations } from '../../utils/i18n-helper.ts';
import itJson from './it.json' with { type: 'json' };

export const it: SiteTranslations = defineSiteTranslations(itJson);
