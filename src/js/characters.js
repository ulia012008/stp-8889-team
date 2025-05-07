import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Characters Swiper
new Swiper('.characters-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.characters-next',
    prevEl: '.characters-prev',
  },
  pagination: {
    el: '.characters-pagination',
    clickable: true,
  },
  breakpoints: {
    1200: { slidesPerView: 3 },
  },
});
