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
