const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePaths = require('case-sensitive-paths-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react'
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&localIdentName=[path]-[local]_[hash:base64:5]!postcss-loader'
        })
      },
      {
        test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new CaseSensitivePaths(),
    new ExtractTextWebpackPlugin({filename: 'style.css', allChunks: true, disable: false})
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      router: path.resolve(__dirname, 'src', 'router')
    }
  }
}
