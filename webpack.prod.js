const glob                   = require('glob');
const path                   = require('path');
const merge                  = require('webpack-merge');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.config.js');

const purgeFromTailwind = content => content.match(/[\w-/:]+(?<!:)/g) || [];

module.exports = merge(common, {
  mode: 'production',

  devtool: false,

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].min.css'
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
