import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
register();

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('swiper-container[data-swiper]')
    .forEach(container => {
      container.swiperParams = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 2,

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
            slidesPerView: 3,
            spaceBetween: 143,
            centeredSlides: true,
            initialSlide: 1,
            allowSlideNext: true,
            allowSlidePrev: true,
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
