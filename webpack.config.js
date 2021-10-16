const HtmlWebpackPlugin          = require('html-webpack-plugin');
const MiniCssExtractPlugin       = require('mini-css-extract-plugin');

const env = process.env.NODE_ENV;

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/js/main.js',

  output: {
    publicPath: '/',
    filename: env === 'development' ? 'js/[name].js' : 'js/bundle.[contenthash].min.js',
    chunkFilename: env === 'development' ? 'js/[name].js' : 'js/[name].[contenthash].min.js'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { implementation: require('sass'), sourceMap: true } },
        ]
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
  ],
}
