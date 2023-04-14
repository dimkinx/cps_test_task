import initExpander from './modules/expander';
import initSlider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM Content Loaded');

  window.addEventListener('load', () => {
    initExpander();
    initSlider();
  });
});
