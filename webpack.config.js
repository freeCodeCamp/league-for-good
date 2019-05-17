const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = env =>({
	mode: env.mode,
	devtool: env.mode === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
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
					emitWarning: true,
					fix: true
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
});
