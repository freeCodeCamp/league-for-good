const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include : path.join(__dirname, 'images'),
        loader  : 'url-loader?limit=30000&name=images/[name].[ext]'
      },
	  {
		test: /\.js$/,
		enforce: 'pre',

		loader: 'eslint-loader',
		options: {
			emitWarning: true,
		},
		},
    ]
  },
  plugins: [
	new HtmlWebpackPlugin({
		template: 'client/index.html'
	})
  ]
};
