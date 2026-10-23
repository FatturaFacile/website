export type ModuleStatus = 'available' | 'in_development' | 'planned' | 'community_backlog';
export type MarketScope = 'ALL' | 'IT' | 'CH';
export type ModuleCategory = 'Core' | 'Tax & Compliance' | 'Operations' | 'Finance' | 'Safety';

export interface ModuleItem {
  id: string;
  title: string;
  category: ModuleCategory;
  description: string;
  status: ModuleStatus;
  market: MarketScope;
  version?: string;
  plannedMilestone?: string;
  votesCount?: number;
  features: string[];
}

type StatusBadgeTone = 'emerald' | 'teal' | 'blue' | 'slate';

const STATUS_BADGE_TONES: Record<StatusBadgeTone, string> = {
  emerald:
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  teal: 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  blue: 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  slate:
    'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
};

function createStatusMeta(
  label: string,
  tone: StatusBadgeTone,
): { label: string; badgeClass: string } {
  return { label, badgeClass: STATUS_BADGE_TONES[tone] };
}

export const MODULE_STATUS_META: Record<ModuleStatus, { label: string; badgeClass: string }> = {
  available: createStatusMeta('Disponibile Subito', 'emerald'),
  in_development: createStatusMeta('In Sviluppo Attivo', 'teal'),
  planned: createStatusMeta('Pianificato', 'blue'),
  community_backlog: createStatusMeta('Proposta Community', 'slate'),
};

export const MARKET_SCOPE_LABELS: Record<MarketScope, { label: string; flag: string }> = {
  ALL: { label: 'Tutti i Mercati', flag: '🌐' },
  IT: { label: 'Italia (FatturaPA / SDI)', flag: '🇮🇹' },
  CH: { label: 'Svizzera (QR-Bill / SIX)', flag: '🇨🇭' },
};

const AVAILABLE_MODULE_BASE = {
  status: 'available' as const,
  version: 'v1.0',
};

const ROADMAP_MODULE_BASE = {
  market: 'ALL' as const,
  plannedMilestone: 'Da definire',
};

type AvailableModuleSeed = readonly [
  id: string,
  title: string,
  category: ModuleCategory,
  market: MarketScope,
  description: string,
  featuresText: string,
];

type RoadmapModuleSeed = readonly [
  id: string,
  title: string,
  category: ModuleCategory,
  status: Exclude<ModuleStatus, 'available'>,
  votesCount: number,
  description: string,
  featuresText: string,
  plannedMilestone?: string,
];

function splitFeatures(featuresText: string): string[] {
  return featuresText.split('|').map((item) => item.trim());
}

function createAvailableModule([
  id,
  title,
  category,
  market,
  description,
  featuresText,
]: AvailableModuleSeed): ModuleItem {
  return {
    ...AVAILABLE_MODULE_BASE,
    id,
    title,
    category,
    market,
    description,
    features: splitFeatures(featuresText),
  };
}

function createRoadmapModule([
  id,
  title,
  category,
  status,
  votesCount,
  description,
  featuresText,
  plannedMilestone,
]: RoadmapModuleSeed): ModuleItem {
  return {
    ...ROADMAP_MODULE_BASE,
    id,
    title,
    category,
    status,
    votesCount,
    plannedMilestone: plannedMilestone ?? ROADMAP_MODULE_BASE.plannedMilestone,
    description,
    features: splitFeatures(featuresText),
  };
}

const AVAILABLE_MODULE_SEEDS: readonly AvailableModuleSeed[] = [
  [
    'mod-core-invoicing',
    'Fatturazione Rapida & Preventivi 1-Click',
    'Core',
    'ALL',
    'Creazione ed emissione istantanea di preventivi e fatture con numerazione sequenziale automatica e generazione PDF pulita.',
    'Conversione istantanea da preventivo a fattura in 1 click|Numerazione sequenziale automatica e gestione note di credito|Layout PDF vettoriale pronto per stampa o invio email|Funzionamento 100% offline con database SQLite embedded',
  ],
  [
    'mod-sdi-fatturapa',
    'FatturaPA XML & Interscambio SDI',
    'Tax & Compliance',
    'IT',
    "Supporto nativo per il formato XML conforme all'Agenzia delle Entrate per regimi forfettari e ordinari.",
    'Generazione file XML standard FatturaPA senza errori di validazione|Gestione Codice Destinatario o PEC del cliente|Supporto regimi fiscali italiani (RF19 forfettario, RF01 ordinario)|Verifica immediata schema XSD prima della trasmissione',
  ],
  [
    'mod-six-qrbill',
    'Polizze QR-Bill SIX & IVA Svizzera',
    'Tax & Compliance',
    'CH',
    'Generazione conforme dello Swiss QR-Bill con codice di pagamento standard SIX e calcolo delle aliquote IVA federali.',
    'Generazione automatica QR-Code di pagamento certificato SIX|Supporto QR-IBAN con Riferimento QR e IBAN standard con SCOR/NON|Aliquote IVA svizzere (normale, ridotta, speciale alloggio)|Doppia valuta supportata nativamente (CHF / EUR)',
  ],
  [
    'mod-encrypted-backup',
    'Backup Cifrato 1-Click & Restore',
    'Safety',
    'ALL',
    'Snapshot crittografato del database locale SQLite su memoria secondaria, unità di rete o cartella cloud sincronizzata.',
    'Archivio ZIP cifrato pronto con un solo clic|Nessuna dipendenza da server esterni di backup proprietari|Ripristino immediato su qualsiasi altra macchina Windows 10/11|Integrità del database verificata pre e post backup',
  ],
];

const ROADMAP_MODULE_SEEDS: readonly RoadmapModuleSeed[] = [
  [
    'mod-payments-schedule',
    'Scadenziario Pagamenti & Riconciliazione',
    'Finance',
    'in_development',
    84,
    'Monitoraggio rapido delle fatture insolute, scadenze passive e ricezione pagamenti con promemoria.',
    'Cruscotto visivo per fatture saldate, in scadenza o scadute|Solleciti di pagamento generabili in un click via email|Riconciliazione manuale veloce delle rate incassate',
    'Q1 2027',
  ],
  [
    'mod-stock-simplified',
    'Magazzino Semplificato & Giacenze Artigiani',
    'Operations',
    'planned',
    67,
    'Tracciamento essenziale dei materiali più utilizzati (cavi, tubature, raccordi) con scarico automatico alla fatturazione.',
    'Anagrafica articoli e prezzi unitari con codice a barre opzionale|Avvisi di scorta minima per riordino materiali di lavoro|Scarico automatico della merce collegata alle voci in fattura',
    'Q2 2027',
  ],
  [
    'mod-advanced-address-book',
    'Anagrafica Clienti/Fornitori Multi-Listino',
    'Operations',
    'community_backlog',
    42,
    'Gestione di listini prezzo personalizzati per cliente con sconti dedicati e storico cantieri/interventi.',
    'Listini differenziati (Privati, Aziende, Subappalti)|Storico interventi e fatture per singolo cliente in una sola scheda|Importazione/esportazione massiva da file Excel o CSV',
  ],
  [
    'mod-cash-register',
    'Registro Corrispettivi & Prima Nota Cassa',
    'Finance',
    'community_backlog',
    35,
    'Annotazione rapida delle entrate e uscite giornaliere contanti senza obbligo di registratore telematico.',
    'Chiusura cassa giornaliera semplice e veloce|Report esportabile per il commercialista o la fiduciaria|Riconciliazione con piccole spese di cantiere documentate',
  ],
];

export const MODULES_DATA: ModuleItem[] = [
  ...AVAILABLE_MODULE_SEEDS.map(createAvailableModule),
  ...ROADMAP_MODULE_SEEDS.map(createRoadmapModule),
];
