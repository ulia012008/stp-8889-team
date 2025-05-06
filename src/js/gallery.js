import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  let gallerySwiper;

  const initGallerySwiper = () => {
    if (window.innerWidth >= 1200) return;

    if (gallerySwiper) return;

    gallerySwiper = new Swiper('[data-swiper="gallery"]', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      watchOverflow: true,
      breakpoints: {
        0: {
          slidesPerView: auto,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
        },
      },
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
    if (window.innerWidth < 1200) {
      initGallerySwiper();
    } else {
      destroyGallerySwiper();
    }
  });
});
