const {merge} = require('webpack-merge');
const commonConfig = require('webpack.common.js');

module.exports = envVariables => {
  const {env} = envVariables;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
