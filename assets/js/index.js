/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function($){\r\n\r\n    new swiper.default('.swiper-trampos',{\r\n        slidesPerView: 1,\r\n        loop: true,\r\n        navigation: {\r\n            nextEl: '.swiper-button-next',\r\n            prevEl: '.swiper-button-prev',\r\n        },\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            clickable: true\r\n        }\r\n    });\r\n    \r\n    AOS.init({\r\n        delay: 500,\r\n        duration: 1300,\r\n    });\r\n\r\n    const typeWritterConfig = {\r\n        delay: 50,\r\n    };\r\n    const mainCall = new typeWritter($('.main-call')[0], typeWritterConfig);\r\n\r\n    mainCall.typeString('Precisa de um site?')\r\n        .pauseFor(1500)\r\n        .deleteChars(6)\r\n        .typeString('a solução web específica para sua empresa?')\r\n        .pauseFor(1500)\r\n        .typeString('<br>Vamos conversar sobre isso!')\r\n        .start()\r\n\r\n\r\n    $('.scroll-pampa').on('click', function(e){\r\n        e.preventDefault();\r\n        let self = $(this);\r\n        $('html, body').animate({\r\n            scrollTop: $(`${self.attr('href')}`).offset().top\r\n        }, 1000);\r\n    })\r\n\r\n    $('.tooltip-tg').tooltip();\r\n    $('.fancybox').fancybox();\r\n    \r\n\r\n    new swiper.default('.swiper-bases',{\r\n        slidesPerView: 3,\r\n        loop: true,\r\n        autoplay: true,\r\n        breakpoints: {\r\n            768: {\r\n                slidesPerView: 5\r\n            },\r\n            992: {\r\n                slidesPerView: 6\r\n            },\r\n            1200: {\r\n                slidesPerView: 7\r\n            }\r\n        },\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            clickable: true\r\n        }\r\n    });\r\n\r\n    let date = new Date();\r\n    $('#idade-do-gatao').text((date.getFullYear() - 1995));\r\n    $('.current-year').text(`${date.getFullYear()}`);\r\n})\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\meu-site\\site\\src\\js\\index.js */\"./src/js/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js?");

/***/ })

/******/ });