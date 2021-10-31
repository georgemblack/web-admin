const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modues/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "API_URL": JSON.stringify("http://localhost:9000"),
    })
  ]
}
