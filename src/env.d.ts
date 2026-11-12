interface ImportMetaEnv {
  readonly PUBLIC_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type GtagCommand = 'config' | 'set' | 'js' | 'event' | 'consent';

interface Window {
  dataLayer: unknown[];
  gtag: (
    command: GtagCommand | string,
    targetOrEventName: string | Date,
    params?: Record<string, unknown> | unknown,
  ) => void;
}

interface Window {
  ffConsent?: {
    get: () => 'granted' | 'denied' | null;
    set: (choice: 'granted' | 'denied') => void;
  };
  openCookiePreferences?: () => void;
}
