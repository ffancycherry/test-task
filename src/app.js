import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
// Swiper.use([Navigation, Pagination])

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2, 
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }
});
