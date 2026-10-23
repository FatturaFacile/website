import { it } from '../src/i18n/locales/it.ts';
import { en } from '../src/i18n/locales/en.ts';
import { fr } from '../src/i18n/locales/fr.ts';
import { de } from '../src/i18n/locales/de.ts';
import type { SiteTranslations } from '../src/i18n/types.ts';

type LocaleName = 'it' | 'en' | 'fr' | 'de';

const locales: Record<LocaleName, SiteTranslations> = {
  it,
  en,
  fr,
  de,
};

const REFERENCE_LOCALE: LocaleName = 'it';

/**
 * Estrae ricorsivamente tutti i percorsi delle chiavi (es. "common.nav.whyUs")
 */
function getAllKeyPaths(obj: Record<string, unknown>, prefix = ''): string[] {
  let keys: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    const currentPath = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      keys = keys.concat(getAllKeyPaths(value as Record<string, unknown>, currentPath));
    } else {
      keys.push(currentPath);
    }
  }

  return keys;
}

function runParityCheck(): void {
  console.log('🔍 Avvio verifica parità chiavi i18n...');

  const referenceKeys = new Set(
    getAllKeyPaths(locales[REFERENCE_LOCALE] as unknown as Record<string, unknown>),
  );
  console.log(
    `Lingua di riferimento: [${REFERENCE_LOCALE.toUpperCase()}] con ${referenceKeys.size} chiavi totali.`,
  );

  let hasErrors = false;
  const targetLocales = (Object.keys(locales) as LocaleName[]).filter(
    (l) => l !== REFERENCE_LOCALE,
  );

  for (const lang of targetLocales) {
    const currentKeys = new Set(
      getAllKeyPaths(locales[lang] as unknown as Record<string, unknown>),
    );

    // Chiavi mancanti rispetto all'italiano
    const missingKeys = [...referenceKeys].filter((k) => !currentKeys.has(k));

    // Chiavi in più rispetto all'italiano (orfane)
    const extraKeys = [...currentKeys].filter((k) => !referenceKeys.has(k));

    if (missingKeys.length > 0) {
      hasErrors = true;
      console.error(
        `\n❌ [${lang.toUpperCase()}] Mancano ${missingKeys.length} chiavi rispetto a ${REFERENCE_LOCALE.toUpperCase()}:`,
      );
      missingKeys.forEach((k) => console.error(`   - ${k}`));
    }

    if (extraKeys.length > 0) {
      hasErrors = true;
      console.error(
        `\n⚠️  [${lang.toUpperCase()}] Contiene ${extraKeys.length} chiavi non presenti in ${REFERENCE_LOCALE.toUpperCase()}:`,
      );
      extraKeys.forEach((k) => console.error(`   + ${k}`));
    }

    if (missingKeys.length === 0 && extraKeys.length === 0) {
      console.log(`✅ [${lang.toUpperCase()}]: Parità 100% con ${REFERENCE_LOCALE.toUpperCase()}`);
    }
  }

  if (hasErrors) {
    console.error('\n💥 Verifica i18n FALLITA: Rilevate discrepanze tra i dizionari.');
    process.exit(1);
  }

  console.log('\n🎉 Tutte le lingue (IT, EN, FR, DE) sono perfettamente allineate!');
  process.exit(0);
}

runParityCheck();
