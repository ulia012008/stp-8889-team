import { mobileMenu } from './js/mobileMenu.js';

mobileMenu();
document.addEventListener('DOMContentLoaded', function () {
  const isLoggedIn = true; // заміни на перевірку, чи залогінений користувач
  const banner = document.querySelector('[data-banner]');
  const acceptBtn = document.querySelector('[data-accept]');
  const declineBtn = document.querySelector('[data-decline]');

  const hasConsent = localStorage.getItem('cookieConsent');

  if (isLoggedIn && !hasConsent) {
    banner.style.display = 'block';
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'accepted');
    banner.style.display = 'none';
  });

  declineBtn.addEventListener('click', function () {
    banner.style.display = 'none';
  });
});
