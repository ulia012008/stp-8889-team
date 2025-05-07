import { mobileMenu } from './js/mobileMenu.js';
import { handleCookieBanner } from './js/coocies.js';
import { AccordionFaq } from './js/faq.js';
import './js/characters';
import './scss/styles.scss';
import './js/reviews.js';
import './js/gallery.js';

// мобільне меню
mobileMenu();
// погодження cookies
handleCookieBanner();
// initCharactersSwiper();

// start >> кнопок переходу в Google Play
const buttons = document.querySelectorAll('#play-btn, #google');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const gameUrl = e.currentTarget.getAttribute('data-game-url');
    if (gameUrl) {
      window.open(gameUrl, '_blank');
    }
  });
});
// << end кнопок переходу в Google Play

// start >> анімація гобліна Хоббіта
document.addEventListener('DOMContentLoaded', () => {
  // faq
  AccordionFaq();

  const hobbit = document.querySelector('[data-hobbit]');
  if (!hobbit) return;

  hobbit.addEventListener('click', () => {
    hobbit.toggleAttribute('data-paused');
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      hobbit.toggleAttribute('data-paused', !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );

  observer.observe(hobbit);
});
// << end анімація гобліна Хоббіта

// відео фрейм
document.querySelectorAll('[data-video-preview]').forEach(preview => {
  preview.addEventListener('click', function () {
    const videoUrl = this.dataset.videoSrc + '?autoplay=1&enablejsapi=1';
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    );
    iframe.style.position = 'absolute';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.top = '0';
    iframe.style.left = '0';

    const container = this.closest('[data-video-container]');
    container.innerHTML = '';
    container.appendChild(iframe);

    // Создаём объект API для управления видео
    const player = new YT.Player(iframe, {
      events: {
        onReady: function (event) {
          // Можешь использовать event.target.playVideo() или pauseVideo()
          event.target.pauseVideo();
        },
      },
    });
  });
});
// відео фрейм
