import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const isDesktop = window.innerWidth >= 1200;

  const swiper = new Swiper('[data-swiper="characters"]', {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    navigation: isDesktop
      ? {
          nextEl: '.characters-next',
          prevEl: '.characters-prev',
        }
      : undefined,

    pagination: isDesktop
      ? {
          el: '.characters-pagination',
          clickable: true,
        }
      : undefined,

    breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  const updateSlideCaptions = swiper => {
    const isDesktop = window.innerWidth >= 1200;
    swiper.slides.forEach(slide => {
      const h3 = slide.querySelector('h3');
      const p = slide.querySelector('p');
      if (!h3 || !p) return;

      if (isDesktop) {
        const isActive = slide.classList.contains('swiper-slide-active');
        h3.classList.toggle('visible', isActive);
        p.classList.toggle('visible', isActive);
      } else {
        h3.classList.add('visible');
        p.classList.add('visible');
      }
    });
  };
});
