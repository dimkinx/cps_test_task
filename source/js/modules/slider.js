const slider = document.querySelector('.page-nav');

const config = {
  wrapperClass: 'page-nav__list',
  slideClass: 'page-nav__item',
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  a11y: {
    slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
  },
};

const initSlider = () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const swiper = new Swiper(slider, config);
};

export default initSlider;
