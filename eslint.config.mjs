import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // Ignora cartelle generate e dipendenze
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      'public/**',
      '*.config.mjs',
      '*.config.js',
    ],
  },

  // Configurazione base JavaScript
  js.configs.recommended,

  // Configurazione TypeScript raccomandata
  ...tseslint.configs.recommended,

  // Configurazione raccomandata per Astro
  ...eslintPluginAstro.configs.recommended,

  // Regole personalizzate per file TypeScript e JavaScript
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  // Override specifici per i file .astro
  {
    files: ['**/*.astro'],
    rules: {
      // Sovrascrivi o aggiungi regole specifiche per i template Astro se necessario
      'astro/no-set-html-directive': 'error',
    },
  },
];
