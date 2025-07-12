import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin-js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly'
      }
    },
    plugins: {
      '@stylistic/js': stylistic
    },
    rules: {
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'always']
    }
  }
];