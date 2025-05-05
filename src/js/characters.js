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
            slidesPerView: 'auto',
          },
        },
        on: {
          init(swiper) {
            updateSlideVisibility(swiper);
          },
          slideChange(swiper) {
            updateSlideVisibility(swiper);
          },
        },
      };

      container.initialize();
    });

  function updateSlideVisibility(swiper) {
    const isDesktop = window.innerWidth >= 1200;

    swiper.slides.forEach(slide => {
      const img = slide.querySelector('img');
      const h3 = slide.querySelector('h3');
      const p = slide.querySelector('p');
      if (!h3 || !p) return;

      const isActive = slide.classList.contains('swiper-slide-active');
      const isNext = slide.classList.contains('swiper-slide-next');
      const isPrev = slide.classList.contains('swiper-slide-prev');
      if (isDesktop) {
        if (isActive) {
          // Активний слайд: нормальний розмір і текст видимий
          img.style.width = '100%';
          img.style.height = 'auto';
          h3.classList.add('visible');
          p.classList.add('visible');
        } else if (isNext || isPrev) {
          // Сусідні слайди: зменшений розмір і текст прихований
          img.style.width = '142px';
          img.style.height = '142px';
          h3.classList.remove('visible');
          p.classList.remove('visible');
        } else {
          // Інші слайди: нормальний розмір і текст прихований
          img.style.width = '100%';
          img.style.height = 'auto';
          h3.classList.remove('visible');
          p.classList.remove('visible');
        }
      } else {
        // На мобільних пристроях текст завжди видимий
        img.style.width = '100%';
        img.style.height = 'auto';
        h3.classList.add('visible');
        p.classList.add('visible');
      }
    });
  }
});
//         on: {
//           slideChange(swiper) {
//             const isDesktop = window.innerWidth >= 1200;
//             swiper.slides.forEach(slide => {
//               const h3 = slide.querySelector('h3');
//               const p = slide.querySelector('p');
//               if (!h3 || !p) return;

//               if (isDesktop) {
//                 const isActive = slide.classList.contains(
//                   'swiper-slide-active'
//                 );
//                 h3.classList.toggle('visible', isActive);
//                 p.classList.toggle('visible', isActive);
//               } else {
//                 h3.classList.add('visible');
//                 p.classList.add('visible');
//               }
//             });
//           },
//         },
//       };

//       container.initialize();
//     });
// });
