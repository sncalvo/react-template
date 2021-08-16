const { alias, aliasJest, configPaths } = require('react-app-rewire-alias');

const { override, addPostcssPlugins } = require('customize-cra');

const aliasMap = configPaths('./tsconfig.paths.json');

// module.exports = alias(aliasMap);
module.exports.jest = override(
  aliasJest(aliasMap),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
);
module.exports = override(
  alias(aliasMap),
  addPostcssPlugins([require('tailwindcss'), require('autoprefixer')])
);
