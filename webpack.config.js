// import modules
var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PRODUCTION   = 'production';
var isProduction = process.env.NODE_ENV === PRODUCTION;

var defaultEntry = ['./src/main.tsx'];

module.exports = {
  entry  : isProduction ?
    defaultEntry : ([
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/dev-server'
    ].concat(
      defaultEntry
    )),
  output : {
    path      : path.resolve(__dirname, 'docs'),
    publicPath: '/',
    filename  : '[name].bundle.js'
  },
  module   : {
    loaders: [
      {
        test   : /\.tsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'ts-loader']
      },
      {
        test   : /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins  : isProduction ? [
    new HtmlWebpackPlugin({
      template: 'src/template.pug'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
  ] : [
    new HtmlWebpackPlugin({
      template: 'src/template.pug'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js'],
  }
};
