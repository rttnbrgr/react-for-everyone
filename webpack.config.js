module.exports = {
	entry: [
		'./src/App.js'
	],
	output: {
		path: __dirname,
		filename: "app.js"
	},
	module: {
		loaders: [{
			tests: /\.jsx?$/,
			loader: 'babel'
		}]
	}
};