import { mobileMenu } from './js/mobileMenu.js';
import { handleCookieBanner } from './js/coocies.js';

import './scss/styles.scss';
import './js/characters.js';
import `./js/reviews.js`;

mobileMenu();
handleCookieBanner();

// button PLAY
document.getElementById('play-btn').addEventListener('click', e => {
  const gameUrl = e.target.getAttribute('data-game-url');
  window.open(gameUrl, '_blank');
});
// swiper

// import { initSwiper } from './js/swiper.js';

// document.addEventListener('DOMContentLoaded', () => {
//   initSwiper();
// });
