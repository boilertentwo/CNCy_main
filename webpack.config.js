module.exports = {
  // Other configuration settings...
  module: {
	rules: [
	  {
		test: /\.jsx?$/,
		exclude: /node_modules/,
		use: {
		  loader: 'babel-loader',
		  options: {
			presets: ['@babel/preset-env', '@babel/preset-react']
		  }
		}
	  },
	  {
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	  },
	  {
		test: /\.(png|jpe?g|gif|svg)$/,
		use: [
		  {
			loader: 'file-loader',
			options: {
			  name: '[name].[ext]',
			  outputPath: 'images/'
			}
		  }
		]
	  }
	]
  },
  resolve: {
	extensions: ['.js', '.jsx']
  }
};const webpack = require('webpack');

module.exports = {
  // ... other configurations
  module: {
    rules: [
      // ... other rules
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
};