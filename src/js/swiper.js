import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Функція для ініціалізації Swiper
export const initSwiper = () => {
  const charactersSwiper = new Swiper('[data-swiper="characters"]', {
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    navigation: {
      nextEl: '[data-swiper-button="next"]',
      prevEl: '[data-swiper-button="prev"]',
    },
    pagination: {
      el: '[data-swiper-pagination="disk"]',
      clickable: true,
    },

    keyboard: {
      enabled: true, // Увімкнення перемикання слайдів клавіатурою
      onlyInViewport: true, // Перемикання тільки якщо слайдер в межах вікна
    },

    breakpoints: {
      320: {
        spaceBetween: 16,
        centeredSlides: true,
      },
      1200: {
        spaceBetween: 24,
        centeredSlides: true,
      },
    },
  });
};
