import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1200;

  const modules = [Navigation];
  const options = {
    modules,
    slidesPerView: 1.32,
    allowTouchMove: true,
    loop: true,
    spaceBetween: 16,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
    },
  };

  if (isDesktop) {
    modules.push(Pagination);
    options.navigation = {
      prevEl: '[data-swiper-button-prev="gallery-prev"]',
      nextEl: '[data-swiper-button-next="gallery-next"]',
    };
    options.pagination = {
      el: '[data-swiper-pagination="gallery-pagination"]',
      clickable: true,
    };
  }

  const swiper = new Swiper('[data-swiper="gallery"]', options);
});
