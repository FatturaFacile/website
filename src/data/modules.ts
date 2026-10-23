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

export const MODULE_STATUS_META: Record<ModuleStatus, { label: string; badgeClass: string }> = {
  available: {
    label: 'Disponibile Subito',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  },
  in_development: {
    label: 'In Sviluppo Attivo',
    badgeClass:
      'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  },
  planned: {
    label: 'Pianificato',
    badgeClass:
      'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  },
  community_backlog: {
    label: 'Proposta Community',
    badgeClass:
      'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700',
  },
};

export const MARKET_SCOPE_LABELS: Record<MarketScope, { label: string; flag: string }> = {
  ALL: { label: 'Tutti i Mercati', flag: '🌐' },
  IT: { label: 'Italia (FatturaPA / SDI)', flag: '🇮🇹' },
  CH: { label: 'Svizzera (QR-Bill / SIX)', flag: '🇨🇭' },
};

export const MODULES_DATA: ModuleItem[] = [
  // --- Moduli Disponibili ---
  {
    id: 'mod-core-invoicing',
    title: 'Fatturazione Rapida & Preventivi 1-Click',
    category: 'Core',
    description:
      'Creazione ed emissione istantanea di preventivi e fatture con numerazione sequenziale automatica e generazione PDF pulita.',
    status: 'available',
    market: 'ALL',
    version: 'v1.0',
    features: [
      'Conversione istantanea da preventivo a fattura in 1 click',
      'Numerazione sequenziale automatica e gestione note di credito',
      'Layout PDF vettoriale pronto per stampa o invio email',
      'Funzionamento 100% offline con database SQLite embedded',
    ],
  },
  {
    id: 'mod-sdi-fatturapa',
    title: 'FatturaPA XML & Interscambio SDI',
    category: 'Tax & Compliance',
    description:
      "Supporto nativo per il formato XML conforme all'Agenzia delle Entrate per regimi forfettari e ordinari.",
    status: 'available',
    market: 'IT',
    version: 'v1.0',
    features: [
      'Generazione file XML standard FatturaPA senza errori di validazione',
      'Gestione Codice Destinatario o PEC del cliente',
      'Supporto regimi fiscali italiani (RF19 forfettario, RF01 ordinario)',
      'Verifica immediata schema XSD prima della trasmissione',
    ],
  },
  {
    id: 'mod-six-qrbill',
    title: 'Polizze QR-Bill SIX & IVA Svizzera',
    category: 'Tax & Compliance',
    description:
      'Generazione conforme dello Swiss QR-Bill con codice di pagamento standard SIX e calcolo delle aliquote IVA federali.',
    status: 'available',
    market: 'CH',
    version: 'v1.0',
    features: [
      'Generazione automatica QR-Code di pagamento certificato SIX',
      'Supporto QR-IBAN con Riferimento QR e IBAN standard con SCOR/NON',
      'Aliquote IVA svizzere (normale, ridotta, speciale alloggio)',
      'Doppia valuta supportata nativamente (CHF / EUR)',
    ],
  },
  {
    id: 'mod-encrypted-backup',
    title: 'Backup Cifrato 1-Click & Restore',
    category: 'Safety',
    description:
      'Snapshot crittografato del database locale SQLite su memoria secondaria, unità di rete o cartella cloud sincronizzata.',
    status: 'available',
    market: 'ALL',
    version: 'v1.0',
    features: [
      'Archivio ZIP cifrato pronto con un solo clic',
      'Nessuna dipendenza da server esterni di backup proprietari',
      'Ripristino immediato su qualsiasi altra macchina Windows 10/11',
      'Integrità del database verificata pre e post backup',
    ],
  },

  // --- Roadmap: In Sviluppo ---
  {
    id: 'mod-payments-schedule',
    title: 'Scadenziario Pagamenti & Riconciliazione',
    category: 'Finance',
    description:
      'Monitoraggio rapido delle fatture insolute, scadenze passive e ricezione pagamenti con promemoria.',
    status: 'in_development',
    market: 'ALL',
    plannedMilestone: 'Q1 2027',
    votesCount: 84,
    features: [
      'Cruscotto visivo per fatture saldate, in scadenza o scadute',
      'Solleciti di pagamento generabili in un click via email',
      'Riconciliazione manuale veloce delle rate incassate',
    ],
  },

  // --- Roadmap: Pianificati ---
  {
    id: 'mod-stock-simplified',
    title: 'Magazzino Semplificato & Giacenze Artigiani',
    category: 'Operations',
    description:
      'Tracciamento essenziale dei materiali più utilizzati (cavi, tubature, raccordi) con scarico automatico alla fatturazione.',
    status: 'planned',
    market: 'ALL',
    plannedMilestone: 'Q2 2027',
    votesCount: 67,
    features: [
      'Anagrafica articoli e prezzi unitari con codice a barre opzionale',
      'Avvisi di scorta minima per riordino materiali di lavoro',
      'Scarico automatico della merce collegata alle voci in fattura',
    ],
  },

  // --- Roadmap: Proposte Backlog Community ---
  {
    id: 'mod-advanced-address-book',
    title: 'Anagrafica Clienti/Fornitori Multi-Listino',
    category: 'Operations',
    description:
      'Gestione di listini prezzo personalizzati per cliente con sconti dedicati e storico cantieri/interventi.',
    status: 'community_backlog',
    market: 'ALL',
    plannedMilestone: 'Da definire',
    votesCount: 42,
    features: [
      'Listini differenziati (Privati, Aziende, Subappalti)',
      'Storico interventi e fatture per singolo cliente in una sola scheda',
      'Importazione/esportazione massiva da file Excel o CSV',
    ],
  },
  {
    id: 'mod-cash-register',
    title: 'Registro Corrispettivi & Prima Nota Cassa',
    category: 'Finance',
    description:
      'Annotazione rapida delle entrate e uscite giornaliere contanti senza obbligo di registratore telematico.',
    status: 'community_backlog',
    market: 'ALL',
    plannedMilestone: 'Da definire',
    votesCount: 35,
    features: [
      'Chiusura cassa giornaliera semplice e veloce',
      'Report esportabile per il commercialista o la fiduciaria',
      'Riconciliazione con piccole spese di cantiere documentate',
    ],
  },
];
