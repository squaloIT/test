
const webpackMerge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
// const modeConfig = env => require("./build-utils/webpack." + env)(env)
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
  return webpackMerge({
    mode,
    "output": {
      "filename": "nundle.js",
    },
    "entry": './src/index.js',
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'], //MiniCssExtractPlugin.loader
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin(),
      new webpack.ProgressPlugin(),
      // new MiniCssExtractPlugin(),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     { from: './index.html', to: './dest' }
      //   ],
      //   options: {
      //     concurrency: 100,
      //   },
      // })
    ]
  })
  // modeConfig(mode)
}