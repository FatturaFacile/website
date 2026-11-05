export type ModuleStatus = 'available' | 'in_development' | 'planned' | 'community_backlog';
export type MarketScope = 'ALL' | 'IT' | 'CH';
export type ModuleCategory = 'Core' | 'Tax & Compliance' | 'Operations' | 'Finance' | 'Safety';

export interface ModuleItem {
  id: string;
  category: ModuleCategory;
  status: ModuleStatus;
  market: MarketScope;
  version?: string;
  plannedMilestone?: string;
  votesCount?: number;
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

/** Badge classes per status; the visible labels live in the locale files. */
export const MODULE_STATUS_STYLES: Record<ModuleStatus, string> = {
  available: STATUS_BADGE_TONES.emerald,
  in_development: STATUS_BADGE_TONES.teal,
  planned: STATUS_BADGE_TONES.blue,
  community_backlog: STATUS_BADGE_TONES.slate,
};

/** Flag per market scope; the visible labels live in the locale files. */
export const MARKET_SCOPE_FLAGS: Record<MarketScope, string> = {
  ALL: '🌐',
  IT: '🇮🇹',
  CH: '🇨🇭',
};

const AVAILABLE_MODULE_BASE = {
  status: 'available' as const,
  version: 'v1.0',
};

const ROADMAP_MODULE_BASE = {
  market: 'ALL' as const,
};

type AvailableModuleSeed = readonly [id: string, category: ModuleCategory, market: MarketScope];

type RoadmapModuleSeed = readonly [
  id: string,
  category: ModuleCategory,
  status: Exclude<ModuleStatus, 'available'>,
  votesCount: number,
  plannedMilestone?: string,
];

function createAvailableModule([id, category, market]: AvailableModuleSeed): ModuleItem {
  return {
    ...AVAILABLE_MODULE_BASE,
    id,
    category,
    market,
  };
}

function createRoadmapModule([
  id,
  category,
  status,
  votesCount,
  plannedMilestone,
]: RoadmapModuleSeed): ModuleItem {
  return {
    ...ROADMAP_MODULE_BASE,
    id,
    category,
    status,
    votesCount,
    ...(plannedMilestone ? { plannedMilestone } : {}),
  };
}

const AVAILABLE_MODULE_SEEDS: readonly AvailableModuleSeed[] = [
  ['mod-core-invoicing', 'Core', 'ALL'],
  ['mod-sdi-fatturapa', 'Tax & Compliance', 'IT'],
  ['mod-six-qrbill', 'Tax & Compliance', 'CH'],
  ['mod-encrypted-backup', 'Safety', 'ALL'],
];

const ROADMAP_MODULE_SEEDS: readonly RoadmapModuleSeed[] = [
  ['mod-payments-schedule', 'Finance', 'in_development', 84, 'Q1 2027'],
  ['mod-stock-simplified', 'Operations', 'planned', 67, 'Q2 2027'],
  ['mod-advanced-address-book', 'Operations', 'community_backlog', 42],
  ['mod-cash-register', 'Finance', 'community_backlog', 35],
];

export const MODULES_DATA: ModuleItem[] = [
  ...AVAILABLE_MODULE_SEEDS.map(createAvailableModule),
  ...ROADMAP_MODULE_SEEDS.map(createRoadmapModule),
];
