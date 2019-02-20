const withTypescript = require('@zeit/next-typescript');
const webpack = require('webpack');
require('dotenv').config();

module.exports = withTypescript({
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    return config;
  }
});
