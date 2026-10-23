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
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
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

  if (isHidden) {
    content.classList.remove('hidden');
    if (arrow) arrow.classList.add('rotate-180');
    button.setAttribute('aria-expanded', 'true');
  } else {
    button.setAttribute('aria-expanded', 'false');
  }
};

window.openPrivacyModal = function () {
  const modal = document.getElementById('privacy-modal');
  const dialog = document.getElementById('privacy-dialog');
  if (!modal || !dialog) return;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    dialog.classList.remove('scale-95');
    dialog.classList.add('scale-100');
  }, 10);
  document.body.style.overflow = 'hidden';
};

window.closePrivacyModal = function () {
  const modal = document.getElementById('privacy-modal');
  const dialog = document.getElementById('privacy-dialog');
  if (!modal || !dialog) return;

  modal.classList.add('opacity-0');
  dialog.classList.remove('scale-100');
  dialog.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 200);
};

document.addEventListener('click', (e) => {
  const modal = document.getElementById('privacy-modal');
  if (modal && e.target === modal) {
    window.closePrivacyModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closePrivacyModal();
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
          'dark:bg-teal-600',
          'text-slate-900',
          'dark:text-white',
          'shadow-sm',
        );
        b.classList.add('text-slate-600', 'dark:text-slate-300');
      });
      btn.classList.remove('text-slate-600', 'dark:text-slate-300');
      btn.classList.add(
        'bg-white',
        'dark:bg-teal-600',
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
