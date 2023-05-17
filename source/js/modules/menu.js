import {lockFocus, unlockFocus} from '../utils/lock-unlock-focus';
import {lockScroll, unlockScroll} from '../utils/lock-unlock-scroll';

const EVENT_TIMEOUT = 600;
const MIN_RESOLUTION = 1366;

const breakpoint = window.matchMedia(`(min-width:${MIN_RESOLUTION}px)`);
const menu = document.querySelector('[data-menu]');

let windowWidth = window.innerWidth;

const documentClickHandler = (evt) => {
  const {target} = evt;

  if (evt.target.matches('[data-menu-btn]')) {
    target.blur();
    target.parentNode.parentNode.blur();
  }

  if (!target.closest('[data-menu-btn]')) {
    return;
  }

  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  openMenu();
};

const documentKeydownHandler = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeMenu();
  }
};

const menuCloseClickHandler = (evt) => {
  const {target} = evt;

  if (target !== menu && !target.closest('[data-menu-btn]')) {
    return;
  }

  evt.preventDefault();
  // eslint-disable-next-line no-use-before-define
  closeMenu();
};

const windowResizeHandler = () => {
  if (windowWidth === window.innerWidth) {
    return;
  }

  windowWidth = window.innerWidth;

  if (breakpoint.matches && menu.closest('[data-menu-opened]')) {
    // eslint-disable-next-line no-use-before-define
    closeMenu();
  }
};

const addListeners = () => {
  menu.addEventListener('click', menuCloseClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
  window.addEventListener('resize', windowResizeHandler);
};

const removeListeners = () => {
  menu.removeEventListener('click', menuCloseClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
  window.removeEventListener('resize', windowResizeHandler);
};

function closeMenu() {
  menu.removeAttribute('data-menu-opened', '');
  removeListeners();
  unlockFocus();
  unlockScroll();
  menu.setAttribute('data-menu-closed', '');

  setTimeout(() => {
    menu.removeAttribute('data-menu-closed', '');
    document.addEventListener('click', documentClickHandler);
  }, EVENT_TIMEOUT);
}

function openMenu() {
  document.removeEventListener('click', documentClickHandler);
  lockFocus('[data-menu]');
  lockScroll();
  menu.setAttribute('data-menu-opened', '');

  setTimeout(() => {
    addListeners();
  }, EVENT_TIMEOUT);
}

const initMenu = () => {
  document.addEventListener('click', documentClickHandler);
};

export default initMenu;
