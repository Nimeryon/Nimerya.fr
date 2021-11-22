
const path = require('path');

module.exports = {
	entry: __dirname + '/src/Index.js',
	mode: 'development',
	devtool: 'cheap-module-source-map',
	output: {
		path: path.join(__dirname, 'public/js'),
		filename: 'bundle.js'
	},
	watch: true,
	module: {
		rules: [
			{
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env'],
							[
								'@babel/preset-react',
								{ "runtime": "automatic" }
							]
						],
						plugins: [
							["@babel/plugin-proposal-class-properties"]
						]
					}
				}
			}
		]
	}
}