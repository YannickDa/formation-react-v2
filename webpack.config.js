const path = require("path")

 module.exports = {
  entry: "./app.js",
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
