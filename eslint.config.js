import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  // Base configuration from @eslint/js
  js.configs.recommended,

  // Add TypeScript plugin and parser
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      "react": react,
      "react-hooks": reactHooks,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-var-requires": "off",

      // General ESLint rules
      "no-console": "off",
      "indent": [
        "error",
        2,
        {
          SwitchCase: 2,
          flatTernaryExpressions: false,
          ignoredNodes: [
            "PropertyDefinition[decorators]",
            "TSUnionType",
            "FunctionExpression[params]:has(Identifier[decorators])",
          ],
        },
      ],

      // React-specific rules
      "react/display-name": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
    },
  },
];
