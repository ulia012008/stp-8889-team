import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  let gallerySwiper;

  const initGallerySwiper = () => {
    if (gallerySwiper) return;
    const isDesktop = window.innerWidth >= 1200;

    gallerySwiper = new Swiper('[data-swiper="gallery"]', {
      loop: false,
      slidesPerView: isDesktop ? 3 : 'auto',
      slidesPerGroup: isDesktop ? 3 : 1,
      spaceBetween: isDesktop ? 20 : 16,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      simulateTouch: true,
    });
  };

  const destroyGallerySwiper = () => {
    if (gallerySwiper) {
      gallerySwiper.destroy(true, true);
      gallerySwiper = null;
    }
  };

  initGallerySwiper();

  window.addEventListener('resize', () => {
    destroyGallerySwiper();
    initGallerySwiper();
  });
});
