// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from "swiper/bundle";

// Start

const indexSwiper = new Swiper(".indexSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: ".indexSwiper-pagination",
  },

  watchSlidesProgress: true,
  spaceBetween: 16, 
  // 循環播放
  loop: true,
  // 自動撥放
  autoplay: {
    delay: 2000,
  },
});

const learningSwiper = new Swiper(".learningSwiper", {
  slidesPerView: 2.3,
  spaceBetween: 12, 
});