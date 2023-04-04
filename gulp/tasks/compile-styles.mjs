/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import gulpif from 'gulp-if';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import stripCssComments from 'gulp-strip-css-comments';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import config from '../config.mjs';

const sass = gulpSass(dartSass);

const compileStyles = () => gulp
  .src(config.path.source.scss, {sourcemaps: config.isDev})
  .pipe(sass().on('error', sass.logError))
  .pipe(
    postcss([
      autoprefixer({
        grid: true,
      })]),
  )
  .pipe(gulpif(config.isProd, gcmq()))
  .pipe(gulpif(config.isProd, stripCssComments({preserve: false})))
  .pipe(gulpif(config.isProd, csso()))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(config.path.build.css, {sourcemaps: '.'}));

export default compileStyles;
