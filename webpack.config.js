const path = require('path');


const pkg = require('./package.json');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index',
  target: 'web',
  devtool: 'eval-source-map',
  output: {
    libraryTarget: 'system',
    libraryExport: 'main',
    publicPath: 'http://localhost:8081/',
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512_000,
    maxAssetSize: 512_000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};
