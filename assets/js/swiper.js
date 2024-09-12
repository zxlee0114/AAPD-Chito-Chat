// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from "swiper/bundle";

// Start

const indexSwiper = new Swiper(".indexSwiper", {
  slidesPerView: 1,
  centeredSlides: true,
  // 左右箭頭
  navigation: {
    prevEl: ".heroSwiper-button-prev",
    nextEl: ".heroSwiper-button-next",
  },
  pagination: {
    el: ".indexSwiper-pagination",
  },

  watchSlidesProgress: true,
  spaceBetween: 16, 
  // breakpoints: {
  //   768: {
  //     spaceBetween: 15, // slide 間距
  //   },
  //   992: {
  //     spaceBetween: 40, // slide 間距
  //   }
  // },
  // 循環播放
  loop: true,
  // 自動撥放
  autoplay: {
    delay: 2000,
  },
});

// 參考文章：https://blog.csdn.net/qq_42855675/article/details/112850049