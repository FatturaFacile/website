# Contributing to FatturaFacile Website

Thank you for your interest in contributing to the official **[FatturaFacile Website](https://github.com/FatturaFacile/website)** (`fatturafacile.eu`)! Every contribution—whether adding a new language translation, refining UI/UX accessibility, or fixing a typo—helps tradespeople and small businesses across Europe and Switzerland.

Please take a moment to review this document before submitting issues or pull requests. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🌍 Contributing Translations (`js/translations.js`)

The landing page uses a lightweight, zero-dependency internationalization (i18n) system powered by `js/translations.js` and `js/main.js`. Currently supported locales are:
* `en` — English
* `it` — Italian (`Italiano`)
* `fr` — French (`Français`)
* `de` — German (`Deutsch`)

### Improving Existing Translations
1. Open [`js/translations.js`](js/translations.js).
2. Locate the target language object (`it`, `en`, `fr`, or `de`).
3. Update the relevant key while preserving any inline HTML tags (such as `<strong>` or `<a>` tags) used for emphasis or links.
4. Test the change locally by toggling the language switcher in the header.

### Adding a New Language
1. **Add the language dictionary:** In [`js/translations.js`](js/translations.js), copy the `en` object block and add a new two-letter ISO 639-1 language key (e.g., `es: { ... }`), translating all keys consistently.
2. **Register the language code:** In [`js/main.js`](js/main.js), add the language code to the `SUPPORTED_LANGS` array:
   ```javascript
   const SUPPORTED_LANGS = ['it', 'en', 'fr', 'de', 'es'];
   ```
3. **Add the switcher button:** In [`index.html`](index.html), add the corresponding button inside the language switcher control group (`id="lang-es-btn"` calling `setLanguage('es')`).
4. **Add Open Graph locale metadata:** Add `<meta property="og:locale:alternate" content="es_ES">` in the `<head>` of [`index.html`](index.html).

---

## 🎨 Styling & UI Improvements

* **Tailwind CSS First:** Prefer standard Tailwind CSS utility classes in [`index.html`](index.html) over writing custom CSS rules.
* **Custom Styles (`css/style.css`):** Keep [`css/style.css`](css/style.css) minimal and reserved for global theme transitions, custom scrollbar rules, or active state utilities (`.tab-active`).
* **Dark & Light Mode Parity:** Every visual change **must** be tested in both Light and Dark themes (`dark:` variant classes) to guarantee legible contrast and visual consistency.
* **Responsive Design:** Verify layouts across mobile (`320px+`), tablet (`md:`), and desktop (`lg:`) viewports.
* **Accessibility (a11y):** Maintain semantic HTML5 landmarks, proper `aria-label` / `aria-expanded` attributes, and keyboard navigation support (e.g., `Escape` to close modals).

---

## 🐛 Reporting Bugs

If you find a broken link, layout glitch, translation error, or accessibility issue:

1. Search existing [GitHub Issues](https://github.com/FatturaFacile/website/issues) to check if it has already been reported.
2. Open a new issue and include:
   * A clear, descriptive title.
   * Browser, OS, and viewport size (mobile/desktop).
   * Active language (`EN`, `IT`, `FR`, `DE`) and theme (`Light` / `Dark`).
   * Steps to reproduce and a screenshot if applicable.

---

## 🔄 Pull Request Workflow

1. **Fork** the [`FatturaFacile/website`](https://github.com/FatturaFacile/website) repository.
2. Create a descriptive branch from `main`:
   ```bash
   git checkout -b feat/add-spanish-translation
   # or
   git checkout -b fix/mobile-header-spacing
   ```
3. Make your changes, keeping commits clean and focused. Use [Conventional Commits](https://www.conventionalcommits.org/) formatting:
   * `feat(i18n): ...`
   * `fix(ui): ...`
   * `docs(readme): ...`
   * `chore(assets): ...`
4. Verify that all relative asset paths (`css/`, `js/`, `img/`, `img/favicon/`) load with zero `404` errors in your browser's Developer Tools Network tab.
5. Push your branch and open a **Pull Request** against `main`.
