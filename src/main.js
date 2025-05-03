import { mobileMenu } from './js/mobileMenu.js';
import { handleCookieBanner } from './js/coocies.js';

mobileMenu();
handleCookieBanner();

import { routes, loadPage } from './js/spa-router.js';

const content = document.getElementById('content');

// Проверка на наличие контейнера для контента
if (content) {
  // Навешивание обработчиков на ссылки в футере
  document.querySelectorAll('footer a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const path = link.getAttribute('href');
      loadPage(path, content);
    });
  });

  // Обработчик события 'popstate'
  window.addEventListener('popstate', () => {
    loadPage(location.pathname, content);
  });

  // Initial load
  loadPage(location.pathname, content);
} else {
  console.error('Content container with ID "content" not found.');
}
