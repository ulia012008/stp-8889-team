import { mobileMenu } from './js/mobileMenu.js';
import { handleCookieBanner } from './js/coocies.js';

import './scss/styles.scss';
import './js/characters.js';

mobileMenu();
handleCookieBanner();

// buton PLAY

document.getElementById('play-btn').addEventListener('click', e => {
  const gameUrl = e.target.getAttribute('data-game-url');
  window.open(gameUrl, '_blank');
});
