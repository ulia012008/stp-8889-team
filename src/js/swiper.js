import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Функція для ініціалізації Swiper
export const initSwiper = () => {
  const charactersSwiper = new Swiper('[data-swiper="characters"]', {
    centeredSlides: true,
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    navigation: {
      nextEl: '[data-swiper-button="next"]',
      prevEl: '[data-swiper-button="prev"]',
    },
    pagination: {
      el: '[data-swiper-pagination="disk"]',
      clickable: true,
    },

    keyboard: {
      enabled: true, // Увімкнення перемикання слайдів клавіатурою
      onlyInViewport: true, // Перемикання тільки якщо слайдер в межах вікна
    },

    breakpoints: {
      320: {
        spaceBetween: 16,
        centeredSlides: true,
      },
      1200: {
        spaceBetween: 24,
        centeredSlides: true,
      },
    },
  });

  if (!charactersSwiper.slides || charactersSwiper.slides.length === 0) {
    console.error('Swiper slides are not defined or empty');
    return;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Ваш код ініціалізації Swiper.js
});



// vbnm,mnbv bn

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
        img.style.width = '100%';
        img.style.height = 'auto';
        h3.classList.add('visible');
        p.classList.add('visible');
      } else if (isNext || isPrev) {
        img.style.width = '142px';
        img.style.height = '142px';
        h3.classList.remove('visible');
        p.classList.remove('visible');
      } else {
        img.style.width = '100%';
        img.style.height = 'auto';
        h3.classList.remove('hidden');
        p.classList.remove('hidden');
      }
    } else {
      img.style.width = '100%';
      img.style.height = 'auto';
      h3.classList.add('visible');
      p.classList.add('visible');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  document
    .querySelectorAll('swiper-container[data-swiper]')
    .forEach(container => {
      container.swiperParams = {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide: 2,
        direction: 'horizontal',
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
            console.log('Swiper initialized:', swiper);
            updateSlideVisibility(swiper);
          },
          slideChange(swiper) {
            updateSlideVisibility(swiper);
          },
        },
      };

      container.initialize();
      console.log('Swiper container initialized:', container);
    });
});