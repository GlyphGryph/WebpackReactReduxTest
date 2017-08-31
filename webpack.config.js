const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './source/javascripts/app.js',
    './source/stylesheets/app.scss'
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './distributable/app')
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader",
            }
          ]
      }
    ]
  }
}
