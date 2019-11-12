// prettier.config.js or .prettierrc.js
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "none",
  eslintIntegration: true,
  proseWrap: "never",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  insertSpaceBeforeFunctionParenthesis: true,
  arrowParens: "always",
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf"
};
