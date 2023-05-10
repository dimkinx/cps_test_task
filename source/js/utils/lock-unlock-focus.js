const SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  '[tabindex]:not([tabindex^="-"])',
];

let lockedSelector = null;
let focusableElements = null;
let endElement = null;

const documentKeydownHandler = (evt) => {
  const {activeElement} = document;

  if (evt.key === 'Tab') {
    if (!focusableElements.length) {
      evt.preventDefault();
      activeElement.blur();

      return;
    }

    if (focusableElements.length === 1) {
      evt.preventDefault();
      focusableElements[0].focus();

      return;
    }

    if (focusableElements.length > 1 && !activeElement.closest(lockedSelector)) {
      evt.preventDefault();
      focusableElements[0].focus();

      return;
    }
  }

  if (evt.key === 'Tab' && !evt.shiftKey && activeElement === focusableElements[focusableElements.length - 1]) {
    evt.preventDefault();
    focusableElements[0].focus();
  }

  if (evt.key === 'Tab' && evt.shiftKey && activeElement === focusableElements[0]) {
    evt.preventDefault();
    focusableElements[focusableElements.length - 1].focus();
  }
};

const unlockFocus = (returnFocus = true) => {
  if (endElement && returnFocus) {
    endElement.focus();
  }

  lockedSelector = null;
  focusableElements = null;
  endElement = null;

  document.removeEventListener('keydown', documentKeydownHandler);
};

const lockFocus = (selector, startFocus = true) => {
  unlockFocus();

  lockedSelector = selector;

  const lockedElement = document.querySelector(lockedSelector);

  if (!lockedElement) {
    return;
  }

  focusableElements = lockedElement.querySelectorAll(SELECTORS);
  endElement = document.activeElement;

  const startElement = lockedElement.querySelector('[data-focus]') || focusableElements[0];

  if (endElement) {
    endElement.blur();
  }

  if (startElement && startFocus) {
    startElement.focus();
  }

  document.addEventListener('keydown', documentKeydownHandler);
};

export {lockFocus, unlockFocus};
