import {lockFocus, unlockFocus} from '../utils/lock-unlock-focus';
import {lockScroll, unlockScroll} from '../utils/lock-unlock-scroll';

const EVENT_TIMEOUT = 600;
const modalOpenElements = document.querySelectorAll('[data-open-modal]');

let openedModalElement = null;
let modalName = null;
let enableScrolling = true;

const documentClickHandler = (evt) => {
  const {target} = evt;

  if (evt.target.matches('[data-open-modal]')) {
    target.blur();
    target.parentNode.parentNode.blur();
  }

  if (!target.closest('[data-open-modal]')) {
    return;
  }

  evt.preventDefault();

  modalName = target.closest('[data-open-modal]').dataset.openModal;

  if (!modalName) {
    return;
  }

  // eslint-disable-next-line no-use-before-define
  openModal();
};

const documentKeydownHandler = (evt) => {
  const isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey) {
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeModal(document.querySelector('.modal.is-active').dataset.modal);
  }
};

const modalClickHandler = (evt) => {
  const {target} = evt;

  if (!target.closest('[data-close-modal]')) {
    return;
  }

  // eslint-disable-next-line no-use-before-define
  closeModal(target.closest('[data-modal]').dataset.modal);
};

const addListeners = (modal) => {
  modal.addEventListener('click', modalClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const removeListeners = (modal) => {
  modal.removeEventListener('click', modalClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function closeModal(name = modalName) {
  const modal = document.querySelector(`[data-modal="${name}"]`);
  const isMenuOpened = Boolean(document.querySelector('[data-menu-opened]'));

  document.removeEventListener('click', documentClickHandler);

  if (!modal || !modal.classList.contains('is-active')) {
    return;
  }

  unlockFocus();

  if (isMenuOpened) {
    lockFocus('[data-menu]');
    enableScrolling = false;
  }

  modal.classList.remove('is-active');
  removeListeners(modal);

  if (enableScrolling) {
    setTimeout(() => {
      unlockScroll();
    }, EVENT_TIMEOUT);
  }

  setTimeout(() => {
    document.addEventListener('click', documentClickHandler);
  }, EVENT_TIMEOUT);

  enableScrolling = true;
}

function openModal(name = modalName) {
  const modal = document.querySelector(`[data-modal="${name}"]`);
  const isMenuOpened = Boolean(document.querySelector('[data-menu-opened]'));

  if (!modal || modal.classList.contains('is-active')) {
    return;
  }

  document.removeEventListener('click', documentClickHandler);
  openedModalElement = document.querySelector('.modal.is-active');

  if (openedModalElement) {
    enableScrolling = false;
    closeModal(openedModalElement.dataset.modal);
  }

  modal.classList.add('is-active');

  if (!openedModalElement && !isMenuOpened) {
    lockScroll();
  }

  lockFocus('.modal.is-active');

  setTimeout(() => {
    addListeners(modal);
    document.addEventListener('click', documentClickHandler);
  }, EVENT_TIMEOUT);
}

const initModal = () => {
  if (modalOpenElements.length) {
    document.addEventListener('click', documentClickHandler);
  }
};

export default initModal;
