/* eslint-disable import/no-extraneous-dependencies */
import browserSync from 'browser-sync';
import config from '../config.mjs';

const server = browserSync.create();

const initServer = () => {
  server.init({
    server: {
      baseDir: config.path.buildFolder,
    },
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });
};

const streamServer = (callback) => callback().pipe(server.stream());

const reloadServer = (callback) => {
  server.reload();
  callback();
};

export {initServer, streamServer, reloadServer};
