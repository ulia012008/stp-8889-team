import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// Ініціалізація з використанням data-атрибута як селектора
new Accordion('[data-accordion-container]');

export function AccordionFaq() {
  const buttonsFaq = document.querySelectorAll('[data-accordion-trigger]');

  buttonsFaq.forEach(button => {
    button.addEventListener('click', () => {
      const panelFaq = button
        .closest('[data-accordion-item]')
        ?.querySelector('[data-accordion-panel]');
      panelFaq?.classList.toggle('open');

      const arrowFaq = button.querySelector('.open-arrow-icon');
      arrowFaq?.classList.toggle('rotated');
    });
  });
}
