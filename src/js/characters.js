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
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 16,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  if (isDesktop) {
    modules.push(Pagination);
    options.navigation = {
      nextEl: '.characters-next',
      prevEl: '.characters-prev',
    };
    options.pagination = {
      el: '.characters-pagination',
      clickable: true,
    };
  }

  const swiper = new Swiper('[data-swiper="characters"]', options);

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

  swiper.on('slideChange', () => updateSlideCaptions(swiper));
  updateSlideCaptions(swiper);
});
