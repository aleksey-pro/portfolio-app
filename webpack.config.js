// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/source',
  devtool: 'source-map',
  entry: {
    app: './js/app.js',
    admin: './js/admin.js'
  },
  output: {
    //publicPath: '',
    filename: 'assets/js/[name].bundle.js',
    path: __dirname + '/public'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',//склеивает только модули что нужны везде, после поля app common: '...,....'
      filename: 'assets/js/common.js',
      minChunks: 2
    })
    // ,
    // new webpack.ProvidePlugin({
    //   $: 'jQuery',
    //   jQuery : 'jQuery'
    // })
    //,
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // })
    // new FaviconsWebpackPlugin('./favicon.png')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(frag|vert)$/,
        loader: 'webpack-glsl-loader'
      }
    ]
  }
};

//https://habrahabr.ru/post/309306/
