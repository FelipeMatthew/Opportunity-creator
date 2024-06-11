document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide', {
    type   : 'loop',
    perPage: 3,
    perMove: 1,
    gap    : '1rem',
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2, // Para desktops
      }
    }
  }).mount();
});
