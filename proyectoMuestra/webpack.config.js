const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  devServer: {
    port : 4000,
    static: './dist'
  },
  module : {
    rules :
    [{
      test: /\.js$/, 
      exclude: /node_modules/, 
      // use: [ { "babel-loader" } ]
      loader: "babel-loader"
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    }
  ]
  }
}