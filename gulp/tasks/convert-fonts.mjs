/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';
import config from '../config.mjs';

const convertTtfToWoff = () => gulp
  .src(config.path.source.ttf, {})
  .pipe(plumber())
  .pipe(ttf2woff())
  .pipe(gulp.dest(config.path.source.fonts));

const convertTtfToWoff2 = () => gulp
  .src(config.path.source.ttf, {})
  .pipe(plumber())
  .pipe(ttf2woff2())
  .pipe(gulp.dest(config.path.source.fonts));

const convertFonts = gulp.parallel(convertTtfToWoff, convertTtfToWoff2);

export default convertFonts;
