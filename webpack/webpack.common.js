const { root } = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

console.log(__dirname);

/**
 * This is a common webpack config which is the base for all builds
 */
module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: root('dist')
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, loader: "file" },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      // {output}/file.txt
      { from: path.join('src', 'assets'), to: 'assets' }
    ])
  ]

};
