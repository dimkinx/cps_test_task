/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import webp from 'gulp-webp';
import config from '../config.mjs';

const createWebp = () => gulp
  .src([
    config.path.source.jpg,
    config.path.source.png,
  ])
  .pipe(webp({quality: 90}))
  .pipe(gulp.dest(config.path.build.img));

export default createWebp;
