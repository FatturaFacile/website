/** @type {import("prettier").Config} */
export default {
  // Regole standard di formattazione
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  // Plugin ufficiali Astro e Tailwind
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  // Override specifici per i file Astro
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
