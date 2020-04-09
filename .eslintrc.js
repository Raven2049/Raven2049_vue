module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/standard", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // don't require .vue extension when importing
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        ts: "never",
        vue: "never"
      }
    ],
    // allow optionalDependencies
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: ["test/unit/index.js"]
      }
    ],
    enforce: "pre",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "no-underscore-dangle": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-multi-assign": "off",
    "consistent-return": "off",
    "no-return-assign": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "prefer-promise-reject-errors": "off",
    "no-unused-expressions": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "no-bitwise": "off",
    "no-console": "off",
    "space-before-function-paren": "off",
    quotes: 0,
    semi: "off",
    strict: "error"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
