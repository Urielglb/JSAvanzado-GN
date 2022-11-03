const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  devServer: {
    port: 4040,
    static: './dist'
  },
  module : {
    rules :
    [{ test: /\.js$/, exclude: /node_modules/, loader : "babel-loader" }]
  }
}