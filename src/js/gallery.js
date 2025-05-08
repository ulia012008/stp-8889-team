import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('[data-swiper="gallery"]', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,

    navigation: {
      prevEl: '.gallery-prev',
      nextEl: '.gallery-next',
    },
    pagination: {
      el: '.gallery-pagination',
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
