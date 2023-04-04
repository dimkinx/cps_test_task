/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import pngQuant from 'imagemin-pngquant';
import mozJpeg from 'imagemin-mozjpeg';
import svgo from 'imagemin-svgo';
import config from '../config.mjs';

const optimizeJpg = () => gulp
  .src(config.path.build.jpg)
  .pipe(gulpif(
    config.isProd,
    imagemin([
      mozJpeg({
        quality: 90,
        progressive: true,
      }),
    ]),
  ))
  .pipe(gulp.dest(config.path.build.img));

const optimizePng = () => gulp
  .src(config.path.build.png)
  .pipe(gulpif(
    config.isProd,
    imagemin([
      pngQuant({
        speed: 1,
        strip: true,
        dithering: 1,
        quality: [0.8, 0.9],
      })]),
  ))
  .pipe(gulp.dest(config.path.build.img));

const optimizeSvg = () => gulp
  .src(config.path.build.svg)
  .pipe(gulpif(
    config.isProd,
    imagemin([
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeRasterImages',
            active: true,
          },
          {
            name: 'removeUselessStrokeAndFill',
            active: false,
          }],
      }),
    ]),
  ))
  .pipe(gulp.dest(config.path.build.img));

export {optimizeJpg, optimizePng, optimizeSvg};
