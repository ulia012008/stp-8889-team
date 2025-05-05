import { mobileMenu } from './js/mobileMenu.js';
import { handleCookieBanner } from './js/coocies.js';
import './js/characters';
import './scss/styles.scss';
import './js/reviews.js';

mobileMenu();
handleCookieBanner();

const buttons = document.querySelectorAll('#play-btn, #google');

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const gameUrl = e.currentTarget.getAttribute('data-game-url');
    if (gameUrl) {
      window.open(gameUrl, '_blank');
    }
  });
});
