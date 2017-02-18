var path=require('path');
var webpack=require('webpack');

module.exports={
	entry:__dirname+'/app/index.js',
	output:{
		path:__dirname+'/public/',
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/.jsx?$/,
				loader:'babel-loader',
				include:path.join(__dirname,'app'),
				exclude:/(node_modules)/,
				query:{
					presets:['es2015','react','stage-0']
				}
			},
			{
				test:/.css?$/,
				loader:'style-loader!css-loader'
			}
		]
	}
}

