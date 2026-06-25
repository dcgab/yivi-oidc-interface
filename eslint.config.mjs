import tseslint from "typescript-eslint";
import js from "@eslint/js";
import globals from "globals";

const tsconfigRootDir = import.meta.dirname;

export default tseslint.config(
  // ---- Global linter options ----
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },

  // ---- Global ignores ----
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/vendor/**",
      "yivi-consent-node/src/attributes.ts",
    ],
  },

  // ---- Base recommended ----
  js.configs.recommended,

  // ---- Node/CommonJS config files ----
  {
    files: [
      "yivi-consent-node/postcss.config.js",
      "yivi-consent-node/tailwind.config.js",
    ],
    languageOptions: {
      globals: globals.node,
    },
  },

  // ---- TypeScript syntax-level recommended ----
  ...tseslint.configs.recommended,

  // ================================================================
  // yivi-consent-node: server + scripts (Node, type-aware)
  // ================================================================
  {
    files: [
      "yivi-consent-node/src/**/*.ts",
      "yivi-consent-node/scripts/**/*.ts",
    ],
    ignores: ["yivi-consent-node/src/attributes.ts"],
    languageOptions: {
      parserOptions: {
        project: "./yivi-consent-node/tsconfig.json",
        tsconfigRootDir,
      },
      globals: globals.node,
    },
    rules: {
      // Type-aware recommended
      ...tseslint.configs.recommendedTypeChecked.reduce(
        (acc, c) => ({ ...acc, ...c.rules }),
        {},
      ),
      // Correctness-focused additions
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrors: "all" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-check": false,
          "ts-expect-error": true,
          "ts-ignore": true,
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-require-imports": "error",
      "no-restricted-properties": [
        "error",
        {
          object: "module",
          property: "exports",
          message: "Use ES module export syntax in authored TypeScript.",
        },
      ],
    },
  },

  // ================================================================
  // yivi-consent-node: tooling config (Node, no project reference)
  // ================================================================
  {
    files: ["yivi-consent-node/vite.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrors: "all" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-check": false,
          "ts-expect-error": true,
          "ts-ignore": true,
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },

  // ================================================================
  // yivi-consent-node: browser client (no project reference)
  // ================================================================
  {
    files: ["yivi-consent-node/client/**/*.ts"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrors: "all" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-check": false,
          "ts-expect-error": true,
          "ts-ignore": true,
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
    },
  },

  // ================================================================
  // ory_auth_demo: server (Node/CommonJS, type-aware)
  // ================================================================
  {
    files: ["examples/kratos-yivi/ory_auth_demo/src/**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./examples/kratos-yivi/ory_auth_demo/tsconfig.json",
        tsconfigRootDir,
      },
      globals: globals.node,
    },
    rules: {
      ...tseslint.configs.recommendedTypeChecked.reduce(
        (acc, c) => ({ ...acc, ...c.rules }),
        {},
      ),
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", caughtErrors: "all" },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-check": false,
          "ts-expect-error": true,
          "ts-ignore": true,
          "ts-nocheck": true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/no-require-imports": "error",
      "no-restricted-properties": [
        "error",
        {
          object: "module",
          property: "exports",
          message: "Use ES module export syntax in authored TypeScript.",
        },
      ],
    },
  },
);
