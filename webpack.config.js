
module.exports = {
	entry: __dirname + '/src/Index.js',
	mode: 'production',
	devtool: 'cheap-module-source-map',
	output: {
		path: __dirname + '/public/js',
		filename: 'bundle.js'
	},
	watch: false,
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