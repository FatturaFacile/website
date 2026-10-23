// Lightweight loader for client-side translation dictionary
window.translations = window.translations || {};
fetch('/js/translations.json')
  .then((res) => (res.ok ? res.json() : {}))
  .then((data) => {
    window.translations = data;
  })
  .catch(() => {
    // Fallback to server-rendered Astro content
  });
