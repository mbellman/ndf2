const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: false,
  mode: 'development',
  devServer: {
    port: 1234,
    open: true,
    static: path.join(__dirname, './public')
  },
  entry: path.join(__dirname, './src/index.tsx'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader'
      },
      {
        test: /.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ]
}