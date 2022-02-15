const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
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
            name: '[name].hash.[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
};