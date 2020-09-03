const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

let config = () => {
  return {
    entry: {
      index: SRC_DIR + `/js/index.js`,
    },
    output: {
      path: DIST_DIR,
      filename: 'js/[name].js'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: SRC_DIR,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        {
          test: /\.(scss|css)$/,
          use: [
            'style-loader',
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '',
              }
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer('last 2 versions', 'ie 11')]
                }
              }
            },
            'sass-loader',
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ title: 'Rhinoda' }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
    ],
    devServer: {
      disableHostCheck: true,
      host: '0.0.0.0'
    }
  }
};

module.exports = config;
