!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}({10:function(e,t){$((function(e){new swiper.default(".swiper-trampos",{slidesPerView:1,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}}),AOS.init({delay:500,duration:1300});new typeWritter(e(".main-call")[0],{delay:50}).typeString("Precisa de um site?").pauseFor(1500).deleteChars(6).typeString("a solução web específica para sua empresa?").pauseFor(1500).typeString("<br>Vamos conversar sobre isso!").start(),e(".scroll-pampa").on("click",(function(t){t.preventDefault();let r=e(this);e("html, body").animate({scrollTop:e(""+r.attr("href")).offset().top},1e3)})),e(".tooltip-tg").tooltip(),e(".fancybox").fancybox(),new swiper.default(".swiper-bases",{slidesPerView:3,loop:!0,autoplay:!0,breakpoints:{768:{slidesPerView:5},992:{slidesPerView:6},1200:{slidesPerView:7}},pagination:{el:".swiper-pagination",clickable:!0}});let t=new Date;e("#idade-do-gatao").text(t.getFullYear()-1995),e(".current-year").text(""+t.getFullYear())}))},9:function(e,t,r){e.exports=r(10)}});