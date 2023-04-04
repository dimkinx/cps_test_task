/* eslint-disable import/no-extraneous-dependencies */
import gulp from 'gulp';
import config from './gulp/config.mjs';
import clearBuild from './gulp/tasks/clear-build.mjs';
import {initServer, streamServer, reloadServer} from './gulp/tasks/server.mjs';
import {copyAssets, copyJpg, copyPng, copySvg} from './gulp/tasks/copy-assets.mjs';
import createSprite from './gulp/tasks/create-sprite.mjs';
import compileHtml from './gulp/tasks/compile-html.mjs';
import compileStyles from './gulp/tasks/compile-styles.mjs';
import compileJs from './gulp/tasks/compile-js.mjs';
import convertFonts from './gulp/tasks/convert-fonts.mjs';
import createWebp from './gulp/tasks/create-webp.mjs';
import {optimizeJpg, optimizePng, optimizeSvg} from './gulp/tasks/optimize-images.mjs';

config.setEnv();

const streamStyles = () => streamServer(compileStyles);

const optimizeImages = async () => gulp.parallel(optimizeSvg, optimizeJpg, optimizePng);

const build = gulp.series(
  clearBuild,
  createWebp,
  copyAssets,
  optimizeImages,
  createSprite,
  gulp.parallel(
    compileHtml,
    compileStyles,
    compileJs,
  ),
);

const watchFiles = () => {
  gulp.watch(config.path.watch.html, gulp.series(compileHtml, reloadServer));
  gulp.watch(config.path.watch.scss, streamStyles);
  gulp.watch(config.path.watch.js, gulp.series(compileJs, reloadServer));
  gulp.watch(config.path.watch.icons, gulp.series(createSprite, compileHtml, reloadServer));
  gulp.watch(config.path.watch.jpg, gulp.series(createWebp, copyJpg, optimizeJpg, compileHtml, reloadServer));
  gulp.watch(config.path.watch.png, gulp.series(createWebp, copyPng, optimizePng, compileHtml, reloadServer));
  gulp.watch(config.path.watch.svg, gulp.series(copySvg, optimizeSvg, compileHtml, reloadServer));
};

const syncServer = gulp.parallel(initServer, watchFiles);

const start = gulp.series(build, syncServer);

export {convertFonts, build, start};
