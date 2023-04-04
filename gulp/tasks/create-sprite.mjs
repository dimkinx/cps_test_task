/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import plumber from 'gulp-plumber';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';
import config from '../config.mjs';

const createSprite = () => gulp
  .src(config.path.source.icons)
  .pipe(plumber())
  .pipe(svgstore({inlineSvg: true}))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest(config.path.source.sprite));

export default createSprite;
