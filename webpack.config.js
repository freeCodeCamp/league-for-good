const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
devtool: 'source-map'

module.exports = {
	entry: './client/index.js',
	output: {
		path: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'eslint-loader',
				options: {
					emitWarning: true
				}
			},
			{
				test: /\.js$|\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				include: [
					path.join(__dirname, 'images'),
					path.join(__dirname, 'client/src/assets')
				],
				loader: 'url-loader?limit=30000&name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'client/index.html'
		})
	]
};
