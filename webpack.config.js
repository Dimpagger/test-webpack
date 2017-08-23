module.exports = {
	devtool: 'eval-dource-map',

	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},

	devServer: {
		contentBase: "./public",
		historyApiFallback: true, 
		inline: true
	},

	module: {
		rules: [
		{
			test: /(\.jsx|\.js)$/,
			use: { loader: "babel-loader" },
			exclude: /node_modules/
		},
		{
			test: /\.css$/,
			use: [
			{ loader: "style-loader"},
			{ loader: "css-loader", options: { modules: true}}
			]
		}
		]
		// loaders: [
		// {
		// 	test: /\.json$/,
		// 	loader: "json"
		// },
		// {
		// 	test: /\.js$/,
		// 	exclude: /node_modules/,
		// 	loader: 'babel'
		// }
		// ]
	}

};

