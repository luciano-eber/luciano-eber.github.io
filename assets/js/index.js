!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({8:function(e,t,n){e.exports=n(9)},9:function(e,t){$((function(e){function t(){e(".header-nav").toggleClass("active")}function n(e,t){let n=e.data("slide");t.slideTo(n)}function i(t,n){e(""+t).removeClass("active"),e(`${t}[data-slide="${n}"]`).addClass("active")}AOS.init({delay:500,duration:1300}),e(".scroll-pampa").on("click",(function(t){t.preventDefault();let n=e(this);e("html, body").animate({scrollTop:e(""+n.attr("href")).offset().top-100},1100)})),e(".open-menu").on("click",t),e(".close-menu").on("click",t);const o=new swiper.default(".swiper-main",{slidesPerView:1,speed:200,effect:"fade",fadeEffect:{crossFade:!0},virtualTranslate:!0,autoplay:{delay:7e3}}),l=e(".swiper-main-control");o.on("slideChange",(function(){let t=o.activeIndex;i(".swiper-main-control",t),e(".swiper-main .swiper-slide").removeClass("fade-slide"),e(`.swiper-main .swiper-slide[data-slide="${t}"]`).addClass("fade-slide")})),l.on("click",(function(){n(e(this),o)}));const a={slidesPerView:1,spaceBetween:50,autoplay:{delay:4e3}},r=new swiper.default(".swiper-automobile",a),s=e(".automobile-control");r.on("slideChange",(function(){i(".automobile-control",r.activeIndex)})),s.on("click",(function(){n(e(this),r)}));const c=new swiper.default(".swiper-larasleek",a),u=e(".larasleek-control");c.on("slideChange",(function(){i(".larasleek-control",c.activeIndex)})),u.on("click",(function(){n(e(this),c)})),new swiper.default(".swiper-bases",{slidesPerView:4,loop:!0,spaceBetween:10,autoplay:{delay:2e3},breakpoints:{576:{slidesPerView:5},768:{slidesPerView:8}}});let d=new Date;e("#age").text(d.getFullYear()-1995),e("#year").text(""+d.getFullYear())}))}});