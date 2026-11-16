/**
 * Google Analytics 4 (GA4) Utility Module
 *
 * Provides typed helpers for tracking page views, user interactions, and custom events
 * without scattering raw `window.gtag` calls across components.
 */

const isBrowser = typeof window !== 'undefined';

export type GtagCommand = 'config' | 'set' | 'js' | 'event' | 'consent';

export interface GtagEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

export interface PageViewParams {
  page_title?: string;
  page_location?: string;
  page_path?: string;
  send_to?: string;
  [key: string]: unknown;
}

/**
 * Low-level safe proxy for `window.gtag`.
 * Checks for browser environment and queues into `window.dataLayer` if GA4 script has not finished loading.
 */
export function gtag(
  command: GtagCommand | string,
  targetOrEventName: string | Date,
  params?: Record<string, unknown> | unknown,
): void {
  if (!isBrowser) return;

  if (typeof window.gtag === 'function') {
    window.gtag(command, targetOrEventName, params);
  } else if (Array.isArray(window.dataLayer)) {
    // Queue call into dataLayer using standard arguments proxy
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  } else if (import.meta.env.DEV) {
    console.debug('[GA4:gtag] window.gtag and dataLayer are not initialized:', {
      command,
      targetOrEventName,
      params,
    });
  }
}

/**
 * Track a custom GA4 event.
 *
 * @param eventName Name of the GA4 event (e.g. 'generate_lead', 'select_content')
 * @param params Optional key-value parameters for the event
 */
export function trackEvent(eventName: string, params?: GtagEventParams): void {
  if (import.meta.env.DEV) {
    console.debug(`[GA4 Event] ${eventName}`, params ?? {});
  }
  gtag('event', eventName, params);
}

/**
 * Track a page view event.
 * Useful for single-page navigations, tab switches, and Astro View Transitions.
 */
export function trackPageView(params?: PageViewParams): void {
  if (!isBrowser) return;

  const pagePath = params?.page_path ?? window.location.pathname;
  const pageLocation = params?.page_location ?? window.location.href;
  const pageTitle = params?.page_title ?? document.title;
  const measurementId = import.meta.env.PUBLIC_GA_ID || 'G-JNQJZBL6PJ';

  const payload: PageViewParams = {
    page_path: pagePath,
    page_location: pageLocation,
    page_title: pageTitle,
    send_to: measurementId,
    ...params,
  };

  if (import.meta.env.DEV) {
    console.debug('[GA4 PageView]', payload);
  }

  gtag('event', 'page_view', payload);
}

/**
 * Track file or application downloads (e.g., Windows installer, source zip, documentation).
 */
export function trackDownload(
  fileName: string,
  options?: { platform?: string; version?: string; fileExtension?: string },
): void {
  trackEvent('file_download', {
    file_name: fileName,
    file_extension: options?.fileExtension ?? fileName.split('.').pop(),
    platform: options?.platform,
    version: options?.version,
  });
}

/**
 * Track language changes (e.g., it -> en, fr, de).
 */
export function trackLanguageChange(language: string): void {
  trackEvent('select_language', {
    language,
    event_category: 'i18n',
    event_label: `Switched to ${language}`,
  });
}

/**
 * Track theme toggles (e.g. light -> dark).
 */
export function trackThemeChange(theme: 'light' | 'dark'): void {
  trackEvent('change_theme', {
    theme,
    event_category: 'ui',
    event_label: `Theme: ${theme}`,
  });
}

/**
 * Track clicks on external/outbound links (e.g., GitHub, Documentation, Demo, Socials).
 */
export function trackOutboundLink(url: string, label?: string): void {
  trackEvent('outbound_click', {
    url,
    event_category: 'outbound_link',
    event_label: label ?? url,
  });
}

/**
 * Track modal openings and closings (e.g., PrivacyModal).
 */
export function trackModal(modalName: string, action: 'open' | 'close'): void {
  trackEvent('modal_interaction', {
    modal_name: modalName,
    action,
    event_category: 'modal',
  });
}

/**
 * Track form interactions and submissions (e.g., Partner application, module requests).
 */
export function trackFormSubmission(
  formName: string,
  status: 'success' | 'failure',
  extra?: Record<string, unknown>,
): void {
  trackEvent('form_submission', {
    form_name: formName,
    submission_status: status,
    ...extra,
  });
}

/**
 * Sets up client-side listeners for navigation (Astro View Transitions),
 * language changes, and outbound links.
 */
let listenersInitialized = false;

export function setupAnalyticsListeners(): void {
  if (!isBrowser || listenersInitialized) return;
  listenersInitialized = true;

  // Track Astro view transition navigation if enabled in the project
  document.addEventListener('astro:page-load', () => {
    trackPageView();
  });

  // Track language changes dispatched by the client runtime (main.js)
  window.addEventListener('ff:language-change', ((event: CustomEvent<{ lang: string }>) => {
    if (event.detail?.lang) {
      trackLanguageChange(event.detail.lang);
    }
  }) as EventListener);

  // Delegate listener for outbound link and file download tracking
  document.addEventListener('click', (event: MouseEvent) => {
    const target = (event.target as HTMLElement | null)?.closest('a');
    if (!target || !target.href) return;

    const href = target.href;
    const url = new URL(href, window.location.origin);

    // Check if link is outbound
    if (
      url.origin !== window.location.origin &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:')
    ) {
      trackOutboundLink(
        href,
        target.textContent?.trim() || target.getAttribute('aria-label') || href,
      );
      return;
    }

    // Check if link is a download file
    const isDownload =
      target.hasAttribute('download') || /\.(exe|zip|tar\.gz|msi|dmg|apk|pdf)$/i.test(url.pathname);
    if (isDownload) {
      const fileName = url.pathname.split('/').pop() || 'unknown';
      trackDownload(fileName);
    }
  });
}
