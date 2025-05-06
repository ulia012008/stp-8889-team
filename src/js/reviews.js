import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  let reviewsSwiper;

  const initReviewsSwiper = () => {
    if (window.innerWidth >= 1200) return;

    if (reviewsSwiper) return;

    reviewsSwiper = new Swiper('[data-swiper="reviews"]', {
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
  };

  const destroyReviewsSwiper = () => {
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }
  };

  initReviewsSwiper();

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1200) {
      initReviewsSwiper();
    } else {
      destroyReviewsSwiper();
    }
  });
});
