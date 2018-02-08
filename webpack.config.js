'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',

  output: {
    path: __dirname,
    filename: 'js/app.js',
    publicPath: 'public/'
  },

  plugins: [
    new ExtractTextPlugin('css/app.css', { allChunks: true }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      },
      {
        test : /\.(eot|otf|woff|woff2|ttf|svg)(\?\S*)?$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  },

  stats: {
    colors: true
  }
};