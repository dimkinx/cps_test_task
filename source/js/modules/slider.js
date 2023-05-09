const MIN_RESOLUTION = 768;

const breakpoint = window.matchMedia(`(min-width:${MIN_RESOLUTION}px)`);
const sliderNodes = document.querySelectorAll('[data-swiper]');
const slidersCollection = new Map();

let windowWidth = window.innerWidth;

const createConfig = (dataAttrValue, configType) => ((configType && (configType === 'simple'))
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
    pagination: true,
    createElements: true,
    slidesPerView: 'auto',
    grabCursor: true,
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

const createSliders = () => {
  sliderNodes.forEach((sliderNode) => {
    const swiper = new window.Swiper(sliderNode, createConfig(
      sliderNode.dataset.swiper,
      sliderNode.dataset.swiperConfigType,
    ));

    slidersCollection.set(sliderNode.dataset.swiper, swiper);
  });
};

const windowResizeHandler = () => {
  if (windowWidth === window.innerWidth) {
    return;
  }

  windowWidth = window.innerWidth;

  if (breakpoint.matches && slidersCollection.size) {
    slidersCollection.forEach((slider) => {
      if (!slider.isBeginning) {
        slider.slideTo(0);
      }
    });
  }
};

const initSliders = () => {
  if (sliderNodes.length) {
    createSliders();
    window.addEventListener('resize', windowResizeHandler);

    return;
  }

  window.removeEventListener('resize', windowResizeHandler);
};

export default initSliders;
