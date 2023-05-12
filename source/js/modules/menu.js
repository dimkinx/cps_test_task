import {lockFocus} from '../utils/lock-unlock-focus';
import {lockScroll} from '../utils/lock-unlock-scroll';

const menuSelector = '[data-menu]';

const initMenu = () => {
  document.querySelector(menuSelector).setAttribute('data-menu-opened', '');
  lockFocus(menuSelector);
  lockScroll();
};

export default initMenu;
