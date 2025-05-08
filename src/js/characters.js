import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('[data-swiper="characters"]', {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.characters-next',
      prevEl: '.characters-prev',
    },
    pagination: {
      el: '.characters-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
