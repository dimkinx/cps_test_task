/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import htmlbeautify from 'gulp-html-beautify';
import plumber from 'gulp-plumber';
import config from '../config.mjs';

const compileHtml = () => gulp
  .src(config.path.source.html)
  .pipe(plumber())
  .pipe(
    fileinclude({
      prefix: '@@',
      basepath: '@root',
    }),
  )
  .pipe(htmlmin({removeComments: true}))
  .pipe(
    htmlbeautify({
      indent_size: 2,
      indent_inner_html: true,
      preserve_newlines: true,
      max_preserve_newlines: 0,
      wrap_attributes: 'auto',
    }),
  )
  .pipe(htmlmin({collapseWhitespace: config.isProd}))
  .pipe(gulp.dest(config.path.build.html));

export default compileHtml;
