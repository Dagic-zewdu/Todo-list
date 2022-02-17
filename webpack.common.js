const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  })],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contentHash].[ext]',
            outputPath: 'asset/',
          },
        },
      },
    ],
  },
};