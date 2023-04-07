import initExpander from './modules/expander';

window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM Content Loaded');

  window.addEventListener('load', () => {
    initExpander();
  });
});
