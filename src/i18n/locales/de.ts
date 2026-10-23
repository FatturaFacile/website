import type { SiteTranslations } from '../types.ts';
import { defineSiteTranslations } from '../../utils/i18n-helper.ts';
import deJson from './de.json' with { type: 'json' };

export const de: SiteTranslations = defineSiteTranslations(deJson);
