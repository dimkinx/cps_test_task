const sliders = document.querySelectorAll('[data-swiper]');

const createConfig = (dataAttrValue, configType) => ((configType && configType === 'simple')
  ? {
    wrapperClass: `${dataAttrValue}__list`,
    slideClass: `${dataAttrValue}__item`,
    slidesPerView: 'auto',
    a11y: {
      slideLabelMessage: 'Пункт меню {{index}} из {{slidesLength}}',
    },
  }
  : {
    wrapperClass: `${dataAttrValue}__list`,
    slideClass: `${dataAttrValue}__item`,
    slidesPerView: 'auto',
    grabCursor: true,
    freeMode: {
      enabled: true,
      momentumBounce: false,
    },
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    createElements: true,
    pagination: true,
    a11y: {
      slideLabelMessage: 'Слайд {{index}} из {{slidesLength}}',
    },
    breakpoints: {
      0: {
        spaceBetween: 16,
        enabled: true,
      },
      360: {
        spaceBetween: 24,
        enabled: true,
      },
      768: {
        enabled: false,
        spaceBetween: 0,
      },
    },
  });

const initSlider = () => {
  sliders.forEach((slider) => {
    const config = createConfig(
      slider.dataset.swiper,
      slider.dataset.swiperConfig,
    );

    // eslint-disable-next-line no-unused-vars
    const swiper = new window.Swiper(slider, config);
  });
};

export default initSlider;
