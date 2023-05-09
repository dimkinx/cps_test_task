import initExpander from './modules/expander';
import initSliders from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM Content Loaded');

  window.addEventListener('load', () => {
    initExpander();
    initSliders();
  });
});
