import {lockFocus} from '../utils/lock-unlock-focus';

const menuSelector = '[data-menu]';

const initMenu = () => {
  document.querySelector(menuSelector).setAttribute('data-menu-opened', '');
  lockFocus(menuSelector);
};

export default initMenu;
