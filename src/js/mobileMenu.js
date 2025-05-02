export function mobileMenu() {
  const menu = document.querySelector('[data-menu]');
  const burgerBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');

  burgerBtn.addEventListener('click', () => {
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  });
}
