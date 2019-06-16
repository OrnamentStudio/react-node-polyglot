const { resolve } = require('path');


module.exports = {
  mode: 'development',

  devServer: {
    contentBase: resolve(__dirname, 'preview'),
    historyApiFallback: { index: 'index.html' },
    port: 3000,
    open: true,
  },

  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },

  context: resolve(__dirname, 'preview'),

  entry: './index.js',
  output: {
    publicPath: '/assets/',
    filename: 'app.js',
  },
};
