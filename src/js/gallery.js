import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('[data-swiper="gallery"]', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 16,
    slidesPerGroup: 1,

    loop: true,
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
      // nextButton: '#banner .swiper-button-next',
      // prevButton: '#banner .swiper-button-prev',
    },
    pagination: {
      el: '.gallery-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loopedSlides: 20, //
        loopFillGroupWithBlank: true,
      },
    },
  });
});
