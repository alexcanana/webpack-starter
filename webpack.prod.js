const glob               = require('glob');
const path               = require('path');
const merge              = require('webpack-merge');
const PurgeCssPlugin     = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',

  devtool: false,

  plugins: [
    new CleanWebpackPlugin(),

    new PurgeCssPlugin({
      paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true })
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
  ],
});
