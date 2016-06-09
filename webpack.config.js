var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  devtool: "source-maps",

  entry: [
    "webpack-dev-server/client?http://localhost:8080", // WebpackDevServer host and port
    "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
    "./src/index.js" // Your appʼs entry point
  ],
  output: {
    path: "./dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["react-hot", "babel"],
      include: path.join(__dirname, "src")
    }, {
      test: /\.css$/,
      loaders: ["style", "css"],
      include: path.join(__dirname, "src")
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/index.html"
    })
  ]
}
