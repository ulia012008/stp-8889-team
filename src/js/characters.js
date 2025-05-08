import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1200;

  new Swiper('[data-swiper="characters"]', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    // navigationDisabledClass: 'swiper-navigation-disabled',

    navigation: isDesktop
      ? {
          nextEl: '.characters-next',
          prevEl: '.characters-prev',
        }
      : false,

    pagination: isDesktop
      ? {
          el: '.characters-pagination',
          clickable: true,
        }
      : false,

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
