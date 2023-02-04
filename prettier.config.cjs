/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
  // plugins: [
  //   require.resolve('prettier-plugin-svelte'),
  //   require.resolve('prettier-plugin-tailwindcss'),
  // ],
  // pluginSearchDirs: false,
  pluginSearchDirs: ['.'],
  overrides: [{files: '*.svelte', options: {parser: 'svelte'}}],
};
