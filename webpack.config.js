var webpack = require('html-webpack-plugin')

var webpackConfig = new webpack({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {

  //input & outputs
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js',
  },

  //define transformations
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [webpackConfig]
}
