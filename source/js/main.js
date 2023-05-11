import iosVhFix from './utils/ios-vh-fix';
import initSliders from './modules/slider';
import initMenu from './modules/menu';
import initExpander from './modules/expander';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initSliders();

  window.addEventListener('load', () => {
    initMenu();
    initExpander();
  });
});
