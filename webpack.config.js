const webpack = require('webpack');
var path = require('path');

module.exports = {

  // set the context (optional)
  context: path.join( __dirname, '/src'),
  entry: {
    vendors: [
      'angular',
      'angular-aria',
      'angular-animate',
      'angular-material',
      'jquery',
      './rwdImageMaps.js',
      './imageMapster.js'
    ],
    index: 'index.js'
  },

  // enable loading modules relatively (without the ../../ prefix)
  resolve: {
    root: path.join( __dirname, '/src')
  },

  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },

  module: {
    loaders: [

      { 
        test: /\.js$/, 
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['es2015'],
            plugins: [
              'babel-plugin-transform-decorators-legacy'
            ],
        }
      },
      { 
        test: /\.html$/, 
        loader: 'raw'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      { 
        test: require.resolve("jquery"), 
        loader: "expose?$!expose?jQuery" 
      }
    ]
  },

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    hot: true
  },

  // support source maps
  devtool: "#inline-source-map",

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]

};