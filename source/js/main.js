import initSliders from './modules/slider';
import initMenu from './modules/menu';
import initExpander from './modules/expander';

window.addEventListener('DOMContentLoaded', () => {
  initSliders();

  window.addEventListener('load', () => {
    initMenu();
    initExpander();
  });
});
