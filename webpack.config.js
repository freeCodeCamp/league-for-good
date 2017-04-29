const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		  test: /\.svg/,
		  use: {
			loader: 'svg-url-loader',
			options: {}
		  }
      }
    ],
	loaders: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?name=/client/src/assets/images/sports_icons/[name].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
	new HtmlWebpackPlugin({
		template: 'client/index.html'
	})
  ]
};
