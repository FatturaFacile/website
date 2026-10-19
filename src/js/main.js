// Main Logic: Dark/Light Mode, Internationalization (i18n), Privacy Modal, FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initYear();
});

/* ==========================================
   DARK / LIGHT THEME MANAGEMENT
   ========================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  // Listen to OS preference changes if user hasn't explicitly overridden theme
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function applyTheme(theme) {
  const lightIcon = document.getElementById('theme-icon-light');
  const darkIcon = document.getElementById('theme-icon-dark');
  const logoPath = document.querySelectorAll('.logo-stroke-adaptive');

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    if (lightIcon && darkIcon) {
      lightIcon.classList.remove('hidden');
      darkIcon.classList.add('hidden');
    }
    logoPath.forEach(el => el.setAttribute('stroke', '#f8fafc'));
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    if (lightIcon && darkIcon) {
      lightIcon.classList.add('hidden');
      darkIcon.classList.remove('hidden');
    }
    logoPath.forEach(el => el.setAttribute('stroke', '#0f172a'));
    localStorage.setItem('theme', 'light');
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

/* ==========================================
   INTERNATIONALIZATION (I18N)
   ========================================== */
const SUPPORTED_LANGS = ['it', 'en', 'fr', 'de'];
let currentLanguage = 'en';

function initLanguage() {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
}

function setLanguage(lang) {
  if (typeof translations === 'undefined' || !translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('lang', lang);

  document.documentElement.lang = lang;

  // Update language switcher active states across all supported languages
  SUPPORTED_LANGS.forEach((l) => {
    const btn = document.getElementById(`lang-${l}-btn`);
    if (btn) {
      if (l === lang) {
        btn.classList.add('tab-active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('tab-active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }
  });

  const dict = translations[lang];

  // Update page title & meta description if provided in translations
  if (dict.page_title) {
    document.title = dict.page_title;
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.page_description) {
    metaDesc.setAttribute('content', dict.page_description);
  }

  // 1. Process data-i18n attributes (supports compound "[attr]key;text_key" or simple "text_key")
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const rawVal = el.getAttribute('data-i18n');
    if (!rawVal) return;

    if (rawVal.includes('[') || rawVal.includes(';')) {
      const parts = rawVal.split(';');
      parts.forEach((part) => {
        part = part.trim();
        if (!part) return;
        const attrMatch = part.match(/^\[([a-zA-Z0-9_-]+)\](.*)$/);
        if (attrMatch) {
          const attr = attrMatch[1];
          const key = attrMatch[2].trim();
          if (dict[key] !== undefined) {
            el.setAttribute(attr, dict[key]);
          }
        } else {
          if (dict[part] !== undefined) {
            el.innerHTML = dict[part];
          }
        }
      });
    } else {
      if (dict[rawVal] !== undefined) {
        el.innerHTML = dict[rawVal];
      }
    }
  });

  // 2. Process data-i18n-* attribute directives (e.g. data-i18n-title, data-i18n-aria-label, data-i18n-content)
  document.querySelectorAll('*').forEach((el) => {
    for (let i = 0; i < el.attributes.length; i++) {
      const attr = el.attributes[i];
      if (attr.name.startsWith('data-i18n-')) {
        const targetAttr = attr.name.substring(10);
        const key = attr.value.trim();
        if (dict[key] !== undefined) {
          el.setAttribute(targetAttr, dict[key]);
        }
      }
    }
  });
}

/* ==========================================
   FAQ ACCORDION
   ========================================== */
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const arrow = button.querySelector('svg');
  const isHidden = content.classList.contains('hidden');

  document.querySelectorAll('#faq-container .faq-answer').forEach((el) => el.classList.add('hidden'));
  document.querySelectorAll('#faq-container svg.faq-arrow').forEach((el) => el.classList.remove('rotate-180'));

  if (isHidden) {
    content.classList.remove('hidden');
    arrow.classList.add('rotate-180');
    button.setAttribute('aria-expanded', 'true');
  } else {
    button.setAttribute('aria-expanded', 'false');
  }
}

/* ==========================================
   PRIVACY MODAL
   ========================================== */
function openPrivacyModal() {
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
}

function closePrivacyModal() {
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
}

// Close when clicking outside dialog (on backdrop)
document.addEventListener('click', (e) => {
  const modal = document.getElementById('privacy-modal');
  if (modal && e.target === modal) {
    closePrivacyModal();
  }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closePrivacyModal();
  }
});

/* ==========================================
   FOOTER YEAR
   ========================================== */
function initYear() {
  const yearSpan = document.getElementById('year-span');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}