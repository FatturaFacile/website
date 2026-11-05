export type CountryCode = 'IT' | 'CH';

export type ServiceCapability =
  | 'on_site_setup'
  | 'network_cloud_setup'
  | 'backup_strategy'
  | 'staff_training'
  | 'tax_accounting_sync'
  | 'custom_integration';

export type PartnerRole =
  'IT Consultant' | 'System Integrator' | 'Fiduciaria / Commercialista' | 'Software House';

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

export const SERVICE_CAPABILITIES: readonly ServiceCapability[] = [
  'on_site_setup',
  'network_cloud_setup',
  'backup_strategy',
  'staff_training',
  'tax_accounting_sync',
  'custom_integration',
];

/**
 * The local partner directory is currently open for public applications.
 * Active accredited partners will be listed here after verification.
 */
export const PARTNERS_DATA: LocalPartner[] = [];

export const partners = PARTNERS_DATA;
