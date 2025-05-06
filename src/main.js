import { mobileMenu } from './js/mobileMenu.js';
import { handleCookieBanner } from './js/coocies.js';
import './js/characters';
import './scss/styles.scss';
import './js/reviews.js';
import './js/gallery.js';

mobileMenu();
handleCookieBanner();

const playBtn = document.getElementById('play-btn');
if (playBtn) {
  playBtn.addEventListener('click', e => {
    const gameUrl = e.target.getAttribute('data-game-url');
    window.open(gameUrl, '_blank');
  });
}
