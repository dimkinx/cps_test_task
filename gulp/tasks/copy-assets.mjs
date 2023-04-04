/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import config from '../config.mjs';

const copyAssets = () => gulp
  .src([
    config.path.source.favicon,
    config.path.source.woff,
    config.path.source.jpg,
    config.path.source.png,
    config.path.source.svg,
  ], {
    base: 'source',
  })
  .pipe(gulp.dest(config.path.buildFolder));

const copyJpg = () => gulp
  .src(config.path.source.jpg, {base: 'source'})
  .pipe(gulp.dest(config.path.buildFolder));

const copyPng = () => gulp
  .src(config.path.source.png, {base: 'source'})
  .pipe(gulp.dest(config.path.buildFolder));

const copySvg = () => gulp
  .src(config.path.source.svg, {base: 'source'})
  .pipe(gulp.dest(config.path.buildFolder));

export {copyAssets, copyJpg, copyPng, copySvg};
