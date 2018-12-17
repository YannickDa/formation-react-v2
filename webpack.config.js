const path = require("path")

 module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "./app.js",
  ],
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  }
}
