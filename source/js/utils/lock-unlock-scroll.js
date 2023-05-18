import iosChecker from './ios-checker';

const lockClass = iosChecker() ? 'scroll-lock-ios' : 'scroll-lock';

const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;

const getBodyScrollTop = () => (
  window.pageYOffset
    || (document.documentElement && document.documentElement.ScrollTop)
    || (document.body && document.body.scrollTop)
);

const lockScroll = () => {
  document.body.dataset.scroll = document.body.dataset.scroll ?? getBodyScrollTop();

  if (getScrollbarWidth()) {
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;
  }

  document.body.style.top = `-${document.body.dataset.scroll}px`;
  document.body.classList.add(lockClass);
};

const unlockScroll = () => {
  document.body.classList.remove(lockClass);
  window.scrollTo(0, +document.body.dataset.scroll);
  document.body.style.paddingRight = null;
  document.body.style.top = null;
  document.body.removeAttribute('data-scroll');
};

export {lockScroll, unlockScroll};
