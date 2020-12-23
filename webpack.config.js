const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [{
      test: /\.(css|saas|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(js)$/,
      use: ['babel-loader'],
    },
    {
      test: /\.(svg|png|jpe?g|gif)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          name: '[name].[ext]',
        },
      }, {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true,
          mozjpeg: {
            progressive: true,
            quality: 75,
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.90],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
            optimizationLevel: 1,
          },
          webp: {
            quality: 75,
          },
        },
      }],
    }, {
      test: /\.(woff|woff2|ttf|otf|eot)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
        },
      }],
    },
    ],
  },
  devtool: 'source-map',
  devServer: {
    port: 4200,
    overlay: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets/img',
          to: './img/',
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
