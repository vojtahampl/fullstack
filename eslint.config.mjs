import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import css from "@eslint/css";
import stylistic from "@stylistic/eslint-plugin"; // přidáno
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,

  // Stylistic konfigurace
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      // Odsazení
      "@stylistic/indent": ["error", 2],
      // Uvozovky
      "@stylistic/quotes": ["error", "single"],
      // Středníky
      "@stylistic/semi": ["error", "always"],
      // Čárky na konci
      "@stylistic/comma-dangle": ["error", "never"],
      // Mezery kolem operátorů
      "@stylistic/space-infix-ops": "error",
      // Mezery v objektech
      "@stylistic/object-curly-spacing": ["error", "always"],
      // Mezery v polích
      "@stylistic/array-bracket-spacing": ["error", "never"],
      // Mezery před závorkami funkcí
      "@stylistic/space-before-function-paren": ["error", "never"],
      // Prázdné řádky na konci souboru
      "@stylistic/eol-last": ["error", "always"],
      // Žádné trailing whitespace
      "@stylistic/no-trailing-spaces": "error"
    }
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.json5"], plugins: { json }, language: "json/json5", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] }
]);