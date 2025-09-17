module.exports = {
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },

  plugins: ["@typescript-eslint", "react-hooks", "react-refresh"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist"],
  env: {
    browser: true,
    es2021: true,
  },
};
