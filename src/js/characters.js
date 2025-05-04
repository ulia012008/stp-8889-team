import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

register();

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('swiper-container[data-swiper]')
    .forEach(container => {
      container.swiperParams = {
        loop: true,
        // Розмір слайдів буде зчитано з CSS, тому 'auto'
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 2, // середній слайд (за кількістю 5)
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        mousewheel: {
          enabled: true,
          forceToAxis: true,
        },
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 0,
          stretch: 143,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        navigation: true,
        pagination: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 'auto',
          },
        },
        on: {
          slideChange(swiper) {
            const isDesktop = window.innerWidth >= 1200;
            swiper.slides.forEach(slide => {
              const h3 = slide.querySelector('h3');
              const p = slide.querySelector('p');
              if (!h3 || !p) return;

              if (isDesktop) {
                const isActive = slide.classList.contains(
                  'swiper-slide-active'
                );
                h3.classList.toggle('visible', isActive);
                p.classList.toggle('visible', isActive);
              } else {
                h3.classList.add('visible');
                p.classList.add('visible');
              }
            });
          },
        },
      };

      container.initialize();
    });
});
