export type CountryCode = 'IT' | 'CH';

export type ServiceCapability =
  | 'on_site_setup'
  | 'network_cloud_setup'
  | 'backup_strategy'
  | 'staff_training'
  | 'tax_accounting_sync'
  | 'custom_integration';

export type PartnerRole =
  | 'IT Consultant'
  | 'System Integrator'
  | 'Fiduciaria / Commercialista'
  | 'Software House';

export interface PartnerLocation {
  city: string;
  regionOrCanton: string;
  postalCode?: string;
  country: CountryCode;
}

export interface PartnerContact {
  email: string;
  phone?: string;
  website?: string;
  address?: string;
}

export interface LocalPartner {
  id: string;
  name: string;
  companyName: string;
  role: PartnerRole;
  location: PartnerLocation;
  contact: PartnerContact;
  services: ServiceCapability[];
  verified: boolean;
  description: string;
}

function createServiceMeta(label: string, icon: string): { label: string; icon: string } {
  return { label, icon };
}

export const SERVICE_LABELS: Record<ServiceCapability, { label: string; icon: string }> = {
  on_site_setup: createServiceMeta('Installazione & Setup Locale', 'desktop'),
  network_cloud_setup: createServiceMeta('Server Privato & Rete Locale', 'server'),
  backup_strategy: createServiceMeta('Backup Cifrato & Ripristino', 'shield-check'),
  staff_training: createServiceMeta('Formazione Utenti', 'academic-cap'),
  tax_accounting_sync: createServiceMeta(
    'Consulenza Fiscale / FatturaPA / QR-Bill',
    'document-text',
  ),
  custom_integration: createServiceMeta('Integrazioni su Misura', 'code-bracket'),
};

type PartnerSeedTuple = readonly [
  id: string,
  name: string,
  companyName: string,
  role: PartnerRole,
  city: string,
  regionOrCanton: string,
  postalCode: string,
  country: CountryCode,
  email: string,
  phone: string,
  website: string,
  services: ServiceCapability[],
  description: string,
  address?: string,
];

function createLocalPartner([
  id,
  name,
  companyName,
  role,
  city,
  regionOrCanton,
  postalCode,
  country,
  email,
  phone,
  website,
  services,
  description,
  address,
]: PartnerSeedTuple): LocalPartner {
  return {
    id,
    name,
    companyName,
    role,
    location: { city, regionOrCanton, postalCode, country },
    contact: {
      email,
      phone,
      website,
      ...(address ? { address } : {}),
    },
    services,
    verified: true,
    description,
  };
}

const PARTNER_SEEDS: readonly PartnerSeedTuple[] = [
  [
    'ch-partner-01',
    'XXX',
    'XXX',
    'System Integrator',
    'XXX',
    'XXX',
    'XXX',
    'CH',
    'XXX@example.ch',
    '+41 XXX XXX XX XX',
    'https://XXX',
    ['on_site_setup', 'network_cloud_setup', 'backup_strategy', 'staff_training'],
    "Assistenza tecnica sul posto nel Sottoceneri e Sopraceneri. Installazione di FatturaFacile su postazioni d'officina, PC portatili e configurazione backup su NAS aziendale.",
    'XXX',
  ],
  [
    'ch-partner-02',
    'XXX',
    'XXX',
    'Fiduciaria / Commercialista',
    'XXX',
    'XXX',
    'XXX',
    'CH',
    'XXX@example.ch',
    '+41 XXX XXX XX XX',
    'https://XXX',
    ['tax_accounting_sync', 'staff_training'],
    'Specializzati nella verifica di conformità fiscale svizzera (polizze QR-Bill SIX e aliquote IVA svizzere) e importazione dei dati contabili per PMI artigiane.',
  ],
  [
    'it-partner-01',
    'XXX',
    'XXX',
    'IT Consultant',
    'XXX',
    'XXX',
    'XXX',
    'IT',
    'XXX@example.it',
    '+39 XXX XXXXXX',
    'https://XXX',
    ['on_site_setup', 'backup_strategy', 'staff_training'],
    "Consulenza e configurazione sul territorio per elettricisti, idraulici e serramentisti. Supporto diretto all'uso su chiavette USB e sincronizzazione sicura delle cartelle.",
  ],
  [
    'it-partner-02',
    'XXX',
    'XXX',
    'Software House',
    'XXX',
    'XXX',
    'XXX',
    'IT',
    'XXX@example.it',
    '+39 XXX XXXXXX',
    'https://XXX',
    ['network_cloud_setup', 'tax_accounting_sync', 'custom_integration'],
    'Implementazione di istanze private Docker per studi associati e micro-imprese. Verifica flussi SDI / FatturaPA e integrazione archivi XML.',
  ],
];

export const PARTNERS_DATA: LocalPartner[] = PARTNER_SEEDS.map(createLocalPartner);

export const partners = PARTNERS_DATA;
