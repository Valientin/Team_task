var path = require('path')
var webpack = require('webpack')
module.exports = {
	mode: 'development',	
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index',
	],
	output: {
    	filename: 'bundle.js',
    	path: path.resolve(__dirname)
    },
    plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoEmitOnErrorsPlugin()
	],
	module: { //Обновлено
		rules: [
        	{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: [
					path.resolve(__dirname, 'node_modules')
				],
				options:{
					plugins: ['transform-runtime']
				}
			},
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
      ]
	}
}
