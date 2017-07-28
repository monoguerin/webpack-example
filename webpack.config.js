var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssCode = new ExtractTextPlugin("styles.css");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader",
            options: {
              failOnWarning: true
            }
          }],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: cssCode.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ])  
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true // Tell the dev-server we're using HMR
  },
  plugins: [
    cssCode,
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ]
};