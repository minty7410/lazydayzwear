document.addEventListener('DOMContentLoaded', () => {
  "use strict";  
	
	
/**
   * index Swiper Slider
   */
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

// 最新商品輪播LIST用
var swiper = new Swiper(".newprolist", {
  slidesPerView: 3,
  spaceBetween: 30,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  pagination: {
	el: ".swiper-pagination",
	clickable: true,
  },
});
// ./最新商品輪播LIST用
	
	
});