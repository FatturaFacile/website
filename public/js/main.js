// Client runtime: Dark/Light Theme, Language State, FAQ Accordion, Privacy Modal
const SUPPORTED_LANGS = ['it', 'en', 'fr', 'de'];
const SAFE_I18N_ATTRS = new Set(['title', 'aria-label', 'placeholder', 'alt', 'content']);

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initYear();
});

function initTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light');

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  } catch {
    // Ignore storage access errors in restricted environments
  }
}

function applyTheme(theme) {
  const lightIcon = document.getElementById('theme-icon-light');
  const darkIcon = document.getElementById('theme-icon-dark');
  const logoPaths = document.querySelectorAll('.logo-stroke-adaptive');
  const isDark = theme === 'dark';

  document.documentElement.classList.toggle('dark', isDark);
  if (lightIcon) lightIcon.classList.toggle('hidden', !isDark);
  if (darkIcon) darkIcon.classList.toggle('hidden', isDark);

  const strokeColor = isDark ? '#f8fafc' : '#0f172a';
  logoPaths.forEach((el) => el.setAttribute('stroke', strokeColor));

  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch {
    // Ignore storage errors
  }
}

window.toggleTheme = function () {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
};

function initLanguage() {
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  const urlLang = SUPPORTED_LANGS.includes(pathParts[0]) ? pathParts[0] : null;
  const pageLang = document.documentElement.getAttribute('data-page-lang');
  let storedLang = null;
  try {
    storedLang = localStorage.getItem('lang');
  } catch {
    storedLang = null;
  }
  const initialLang = urlLang || pageLang || storedLang || 'it';
  window.setLanguage(initialLang);
}

window.setLanguage = function (lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  try {
    localStorage.setItem('lang', lang);
  } catch {
    // Ignore storage errors
  }
  document.documentElement.lang = lang;

  SUPPORTED_LANGS.forEach((l) => {
    const btn = document.getElementById(`lang-${l}-btn`);
    if (btn) {
      const isActive = l === lang;
      btn.classList.toggle('tab-active', isActive);
      if (isActive) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    }
  });

  const dict = window.translations && window.translations[lang];
  if (dict) {
    document.querySelectorAll('*').forEach((el) => {
      for (let i = 0; i < el.attributes.length; i++) {
        const attr = el.attributes[i];
        if (attr.name.startsWith('data-i18n-')) {
          const targetAttr = attr.name.substring(10);
          const key = attr.value.trim();
          if (SAFE_I18N_ATTRS.has(targetAttr) && typeof dict[key] === 'string') {
            el.setAttribute(targetAttr, dict[key]);
          }
        }
      }
    });
  }

  window.dispatchEvent(new CustomEvent('ff:language-change', { detail: { lang } }));
};

window.toggleFaq = function (button) {
  if (!(button instanceof HTMLElement)) return;
  const content = button.nextElementSibling;
  if (!(content instanceof HTMLElement)) return;
  const arrow = button.querySelector('svg');
  const isHidden = content.classList.contains('hidden');

  document.querySelectorAll('.faq-answer').forEach((el) => el.classList.add('hidden'));
  document.querySelectorAll('svg.faq-arrow').forEach((el) => el.classList.remove('rotate-180'));
  document
    .querySelectorAll('.faq-item > button[aria-expanded]')
    .forEach((el) => el.setAttribute('aria-expanded', 'false'));

  if (isHidden) {
    content.classList.remove('hidden');
    if (arrow) arrow.classList.add('rotate-180');
    button.setAttribute('aria-expanded', 'true');
  } else {
    button.setAttribute('aria-expanded', 'false');
  }
};

// Privacy modal: accessible dialog with focus trap and focus restoration (WCAG 2.4.3 / 4.1.2)
let privacyModalOpener = null;

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function getFocusable(container) {
  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (el) => el instanceof HTMLElement && el.offsetParent !== null,
  );
}

function isPrivacyModalOpen() {
  const modal = document.getElementById('privacy-modal');
  return !!modal && !modal.classList.contains('hidden');
}

window.openPrivacyModal = function () {
  const modal = document.getElementById('privacy-modal');
  const dialog = document.getElementById('privacy-dialog');
  if (!modal || !dialog) return;

  privacyModalOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null;

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    dialog.classList.remove('scale-95');
    dialog.classList.add('scale-100');
  }, 10);
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('privacy-modal-close');
  const target = closeBtn || getFocusable(dialog)[0] || dialog;
  if (target instanceof HTMLElement) target.focus();
};

window.closePrivacyModal = function () {
  const modal = document.getElementById('privacy-modal');
  const dialog = document.getElementById('privacy-dialog');
  if (!modal || !dialog || modal.classList.contains('hidden')) return;

  modal.classList.add('opacity-0');
  modal.setAttribute('aria-hidden', 'true');
  dialog.classList.remove('scale-100');
  dialog.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 200);

  if (privacyModalOpener && document.contains(privacyModalOpener)) {
    privacyModalOpener.focus();
  }
  privacyModalOpener = null;
};

document.addEventListener('click', (e) => {
  const modal = document.getElementById('privacy-modal');
  if (modal && e.target === modal) {
    window.closePrivacyModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (!isPrivacyModalOpen()) return;

  if (e.key === 'Escape') {
    window.closePrivacyModal();
    return;
  }

  if (e.key === 'Tab') {
    const dialog = document.getElementById('privacy-dialog');
    if (!dialog) return;
    const focusable = getFocusable(dialog);
    if (!focusable.length) {
      e.preventDefault();
      dialog.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || !dialog.contains(active))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
      e.preventDefault();
      first.focus();
    }
  }
});

function initYear() {
  const yearSpan = document.getElementById('year-span');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }
}

window.initCountryFilter = function (btnSelector, cardSelector, btnAttr) {
  const filterBtns = document.querySelectorAll(btnSelector);
  const cards = document.querySelectorAll(cardSelector);
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute(btnAttr);
      filterBtns.forEach((b) => {
        b.classList.remove(
          'bg-white',
          'dark:bg-teal-700',
          'text-slate-900',
          'dark:text-white',
          'shadow-sm',
        );
        b.classList.add('text-slate-600', 'dark:text-slate-300');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.setAttribute('aria-pressed', 'true');
      btn.classList.remove('text-slate-600', 'dark:text-slate-300');
      btn.classList.add(
        'bg-white',
        'dark:bg-teal-700',
        'text-slate-900',
        'dark:text-white',
        'shadow-sm',
      );

      cards.forEach((card) => {
        const cardCountry = card.getAttribute('data-country');
        card.classList.toggle('hidden', selected !== 'ALL' && cardCountry !== selected);
      });
    });
  });
};
