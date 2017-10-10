const { environment } = require('@rails/webpacker')
const webpack = require('webpack');
const merge = require('webpack-merge');
const jquery = require('jquery');

module.exports = merge({
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}, environment.toWebpackConfig());
