const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

module.exports = webpackMiddleware(webpack(webpackConfig));
