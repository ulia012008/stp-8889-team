export function mobileMenu() {
  const openMenuBtns = document.querySelectorAll('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const mobileMenu = document.querySelector('[data-menu]');
  const navLinks = document.querySelectorAll('[data-menu] a');
  const body = document.body;

  const openMenu = () => {
    mobileMenu.setAttribute('data-menu-visible', 'true');
    body.setAttribute('data-lock-scroll', 'true');
  };

  const closeMenu = () => {
    mobileMenu.removeAttribute('data-menu-visible');
    body.removeAttribute('data-lock-scroll');
  };

  openMenuBtns.forEach(btn => {
    btn.addEventListener('click', openMenu);
  });

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        const headerOffset = window.innerWidth >= 1200 ? 100 : 60;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        closeMenu();
      }
    });
  });
}
