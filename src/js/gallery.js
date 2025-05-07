import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Gallary Swiper
new Swiper('[data-swiper="gallery]', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },
  pagination: {
    el: '.gallery-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3 },
  },
});
