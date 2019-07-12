const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');
 
/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
        '@containers': path.resolve(__dirname, `${paths.appSrc}/containers/`),
        '@redux': path.resolve(__dirname, `${paths.appSrc}/redux/`),
        '@graphql': path.resolve(__dirname, `${paths.appSrc}/graphql/`),
        '@styles': path.resolve(__dirname, `${paths.appSrc}/styles/`), 
        '@src': path.resolve(__dirname, `${paths.appSrc}/`), 
    })(config, env);
  return config;
}