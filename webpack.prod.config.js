const path = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9002,
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
      "API_URL": JSON.stringify("https://api.georgeblack.me"),
    })
  ]
}
