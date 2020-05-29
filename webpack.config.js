
const webpackMerge = require('webpack-merge');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const modeConfig = env => require("./build-utils/webpack." + env)(env)
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
  return webpackMerge({
    mode,
    "output": {
      "filename": "nundle.js",
    },
    "entry": './src/index.js',
    module: {
      rules: [
        // {
        //   test: /\.html$/i,
        //   loader: 'html-loader',
        // },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'], //
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: './index.html', to: './public/index.html' }
        ],
        options: {
          concurrency: 100,
        },
      }),
      // new HtmlWebPackPlugin(),
      new MiniCssExtractPlugin(),
    ]
  })
  // modeConfig(mode)
}