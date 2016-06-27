var Extract = require('extract-text-webpack-plugin');
module.exports = {
	entry: "./app.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.css$/,
				loader: Extract.extract('style', 'css?localIdentName=[name]_[local]_[hash:base64:6]&modules!postcss')
			}
		]
	},
	plugins: [
		new Extract('bundle.css')
	]
};
