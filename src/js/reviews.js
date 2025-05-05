import Swiper from 'swiper';
import 'swiper/css';

document.addEventListener('DOMContentLoaded', () => {
  let reviewsSwiper;

  const initReviewsSwiper = () => {
    // лише для мобілок
    if (window.innerWidth >= 1200) return;

    // не ініціалізуємо вдруге
    if (reviewsSwiper) return;

    reviewsSwiper = new Swiper('[data-swiper="reviews"]', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 20,
      watchOverflow: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      // без пагінації, як ви просили
    });
  };

  const destroyReviewsSwiper = () => {
    if (reviewsSwiper) {
      reviewsSwiper.destroy(true, true);
      reviewsSwiper = null;
    }
  };

  // перша ініціалізація
  initReviewsSwiper();

  // при зміні розміру вікна: створювати/знищувати свайпер
  window.addEventListener('resize', () => {
    if (window.innerWidth < 1200) {
      initReviewsSwiper();
    } else {
      destroyReviewsSwiper();
    }
  });
});
