const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    './src/js/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HTMLPlugin({
      template: 'src/template.html',
      minify: { collapseWhitespace: true },
      title: 'Exness Cart'
    }),
    new ExtractTextPlugin('assets/styles.css')
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
  }
};
