/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import config from '../config.mjs';

const compileJs = () => gulp
  .src(config.path.source.js)
  .pipe(webpackStream({
    context: config.path.sourceFolder,
    mode: 'development',
    entry: {
      main: './js/main.js',
      vendor: './js/vendor.js',
    },
    devtool: config.isDev ? 'source-map' : false,
    output: {
      filename: '[name].min.js',
      path: config.path.build.js,
    },
    optimization: {
      minimize: config.isProd,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          resolve: {
            fullySpecified: false,
          },
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new DuplicatePackageCheckerPlugin(),
      new CircularDependencyPlugin(),
    ],
  }))
  .pipe(gulp.dest(config.path.build.js));

export default compileJs;
