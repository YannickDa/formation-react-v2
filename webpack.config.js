const webpack = require("webpack")
const path = require("path")

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "./src/index.js",
  ],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.min.js",
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: "localhost",
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
}
