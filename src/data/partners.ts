export type CountryCode = 'IT' | 'CH';

export type ServiceCapability =
  | 'on_site_setup' // Installazione e configurazione su PC/USB
  | 'network_cloud_setup' // Configurazione server locale / NAS / Docker
  | 'backup_strategy' // Piani di backup cifrati e disaster recovery
  | 'staff_training' // Formazione del personale aziendale
  | 'tax_accounting_sync' // Raccordo con commercialista o fiduciaria
  | 'custom_integration'; // Script o integrazioni gestionali personalizzate

export interface PartnerLocation {
  city: string;
  regionOrCanton: string; // es. "Lombardia", "Ticino", "Piemonte"
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
  role: 'IT Consultant' | 'System Integrator' | 'Fiduciaria / Commercialista' | 'Software House';
  location: PartnerLocation;
  contact: PartnerContact;
  services: ServiceCapability[];
  verified: boolean;
  description: string;
}

// Mappatura delle etichette descrittive per i filtri e i badge UI
export const SERVICE_LABELS: Record<ServiceCapability, { label: string; icon: string }> = {
  on_site_setup: {
    label: 'Installazione & Setup Locale',
    icon: 'desktop',
  },
  network_cloud_setup: {
    label: 'Server Privato & Rete Locale',
    icon: 'server',
  },
  backup_strategy: {
    label: 'Backup Cifrato & Ripristino',
    icon: 'shield-check',
  },
  staff_training: {
    label: 'Formazione Utenti',
    icon: 'academic-cap',
  },
  tax_accounting_sync: {
    label: 'Consulenza Fiscale / FatturaPA / QR-Bill',
    icon: 'document-text',
  },
  custom_integration: {
    label: 'Integrazioni su Misura',
    icon: 'code-bracket',
  },
};

export const PARTNERS_DATA: LocalPartner[] = [
  // --- Svizzera 🇨🇭 ---
  {
    id: 'ch-ticino-01',
    name: 'Marco Rossi',
    companyName: 'Ticino Tech Solutions',
    role: 'System Integrator',
    location: {
      city: 'Lugano',
      regionOrCanton: 'Ticino',
      postalCode: '6900',
      country: 'CH',
    },
    contact: {
      email: 'supporto@ticinotech.ch',
      phone: '+41 91 123 45 67',
      website: 'https://ticinotech.example.ch',
      address: 'Via Lugano 12, 6900 Lugano',
    },
    services: ['on_site_setup', 'network_cloud_setup', 'backup_strategy', 'staff_training'],
    verified: true,
    description:
      "Assistenza tecnica sul posto nel Sottoceneri e Sopraceneri. Installazione di FatturaFacile su postazioni d'officina, PC portatili e configurazione backup su NAS aziendale.",
  },
  {
    id: 'ch-ticino-02',
    name: 'Studio Fiduciario Bellinzona',
    companyName: 'Fiduciaria & Servizi SA',
    role: 'Fiduciaria / Commercialista',
    location: {
      city: 'Bellinzona',
      regionOrCanton: 'Ticino',
      postalCode: '6500',
      country: 'CH',
    },
    contact: {
      email: 'info@fiduciariaservizi.example.ch',
      phone: '+41 91 820 00 00',
      website: 'https://fiduciariaservizi.example.ch',
    },
    services: ['tax_accounting_sync', 'staff_training'],
    verified: true,
    description:
      'Specializzati nella verifica di conformità fiscale svizzera (polizze QR-Bill SIX e aliquote IVA svizzere) e importazione dei dati contabili per PMI artigiane.',
  },

  // --- Italia 🇮🇹 ---
  {
    id: 'it-lombardia-01',
    name: 'Andrea Bianchi',
    companyName: 'Informatica Varese & Laghi',
    role: 'IT Consultant',
    location: {
      city: 'Varese',
      regionOrCanton: 'Lombardia',
      postalCode: '21100',
      country: 'IT',
    },
    contact: {
      email: 'contatto@infovarese.example.it',
      phone: '+39 0332 123456',
      website: 'https://infovarese.example.it',
    },
    services: ['on_site_setup', 'backup_strategy', 'staff_training'],
    verified: true,
    description:
      "Consulenza e configurazione sul territorio per elettricisti, idraulici e serramentisti. Supporto diretto all'uso su chiavette USB e sincronizzazione sicura delle cartelle.",
  },
  {
    id: 'it-piemonte-01',
    name: 'Soluzioni Digitali Novara',
    companyName: 'DigiPiemonte Srl',
    role: 'Software House',
    location: {
      city: 'Novara',
      regionOrCanton: 'Piemonte',
      postalCode: '28100',
      country: 'IT',
    },
    contact: {
      email: 'help@digipiemonte.example.it',
      phone: '+39 0321 654321',
      website: 'https://digipiemonte.example.it',
    },
    services: ['network_cloud_setup', 'tax_accounting_sync', 'custom_integration'],
    verified: true,
    description:
      'Implementazione di istanze private Docker per studi associati e micro-imprese. Verifica flussi SDI / FatturaPA e integrazione archivi XML.',
  },
];

export const partners = PARTNERS_DATA;
