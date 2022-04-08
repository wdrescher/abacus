const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'STABLE_FEATURE': JSON.stringify(true),
      'EXPERIMENTAL_FEATURE': JSON.stringify(false)
    })
  ],
  devServer: {
    index: "",
    proxy: {
      '/api': 'http://localhost:80',
    },
  }
};