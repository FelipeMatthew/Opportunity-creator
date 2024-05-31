document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      accordionButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
      if (!isExpanded) {
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
