document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide', {
    type   : 'loop',
    perPage: 1,
    gap: '1rem'

  }).mount();
});