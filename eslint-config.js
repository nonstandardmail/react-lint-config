const path = require("path");

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    serviceworker: true
  },
  extends: ["airbnb", "plugin:jest/recommended", "jest-enzyme"],
  plugins: ["babel", "import", "jsx-a11y", "react", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-restricted-globals": 1,
    quotes: [2, "double", { avoidEscape: true }],
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before"
        }
      }
    ],
    indent: "off",
    "react/no-did-update-set-state": "off",
    "consistent-return": "off",
    "react/destructuring-assignment": "off",
    "generator-star-spacing": "off",
    "no-prototype-builtins": "off",
    "import/prefer-default-export": "off",
    "implicit-arrow-linebreak": "off",
    "no-array-index-key": "off",
    "linebreak-style": "off",
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore"
      }
    ],
    "no-ternary": "off",
    "multiline-ternary": ["error", "always-multiline"],
    "no-nested-ternary": "off",
    "arrow-parens": "off",
    "object-curly-newline": "off",
    "no-mixed-operators": "off",
    "arrow-body-style": "off",
    "function-paren-newline": "off",
    "no-plusplus": "off",
    "prefer-promise-reject-errors": "off",
    "space-before-function-paren": 0,

    "max-len": [
      "error",
      100,
      2,
      { code: 100, ignoreUrls: true, ignoreStrings: true }
    ],
    "no-console": "error",
    "no-alert": "error",

    "no-param-reassign": "off",
    radix: "off",

    "react/require-default-props": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],

    "prefer-destructuring": "off",

    "react/no-find-dom-node": "off",
    "react/no-did-mount-set-state": "off",
    "react/no-unused-prop-types": "off",
    "react/jsx-one-expression-per-line": "off",

    "jsx-a11y/anchor-is-valid": [
      "error",
      { components: ["Link"], specialLink: ["to"] }
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          every: ["id"]
        }
      }
    ],

    "prettier/prettier": ["error"]
  }
};
