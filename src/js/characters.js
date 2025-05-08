import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1200;

  // Инициализация Swiper
  const swiper = new Swiper('[data-swiper="characters"]', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,

    // Динамическое подключение навигации и пагинации
    navigation: isDesktop
      ? {
          nextEl: '.characters-next',
          prevEl: '.characters-prev',
        }
      : undefined, // убрал false, чтобы Swiper не ожидает объект

    pagination: isDesktop
      ? {
          el: '.characters-pagination',
          clickable: true,
        }
      : undefined, // убрал false, чтобы Swiper не ожидает объект

    // Настройки для десктопов
    breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
