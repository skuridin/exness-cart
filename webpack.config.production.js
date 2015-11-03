const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/js/app',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/bundle-[hash:9].js',
    publicPath: ''
  },
  plugins: [
    new HTMLPlugin({
      template: 'src/template.html',
      minify: { collapseWhitespace: true },
      title: 'Exness Cart'
    }),
    new ExtractTextPlugin('assets/styles-[contentHash:9].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
    ]
  }
};
