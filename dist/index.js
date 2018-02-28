module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_withCarousel__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_withCarousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_withCarousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["default"] = ({
  withCarousel: __WEBPACK_IMPORTED_MODULE_0__utils_withCarousel__["default"],
  IPhoneX: __WEBPACK_IMPORTED_MODULE_1__components__["d" /* IPhoneX */],
  IPhone8: __WEBPACK_IMPORTED_MODULE_1__components__["c" /* IPhone8 */],
  IPad: __WEBPACK_IMPORTED_MODULE_1__components__["b" /* IPad */],
  IMac: __WEBPACK_IMPORTED_MODULE_1__components__["a" /* IMac */],
  MacbookPro: __WEBPACK_IMPORTED_MODULE_1__components__["e" /* MacbookPro */],
  Pixel2: __WEBPACK_IMPORTED_MODULE_1__components__["f" /* Pixel2 */]
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (7:10)\nYou may need an appropriate loader to handle this file type.\n|   return class Carousel extends Component {\n| \n|     state = {\n|       currentSlideIdx: 0\n|     }");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IPhoneX__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IPhoneX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__IPhoneX__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__IPhoneX__, "default")) __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__IPhoneX__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IPhone8__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IPhone8___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IPhone8__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__IPhone8__, "default")) __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__IPhone8__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IPad__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IPad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__IPad__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__IPad__, "default")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__IPad__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IMac__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IMac___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__IMac__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__IMac__, "default")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__IMac__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MacbookPro__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__MacbookPro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__MacbookPro__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__MacbookPro__, "default")) __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__MacbookPro__["default"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pixel2__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Pixel2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Pixel2__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__Pixel2__, "default")) __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__Pixel2__["default"]; });








/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n| \n| const IPhoneX = ({ children }) => (\n|   <Device\n|     className=\"iphoneX\"\n|     src={image}");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n| \n| const IPhone8 = ({ children }) => (\n|   <Device\n|     className=\"iphone8\"\n|     src={image}");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n| \n| const IPad = ({ children }) => (\n|   <Device\n|     className=\"ipad\"\n|     src={image}");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n| \n| const IMac = ({ children }) => (\n|   <Device\n|     className=\"imac\"\n|     src={image}");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n| \n| const MacbookPro = ({ children }) => (\n|   <Device\n|     className=\"macbook-pro\"\n|     src={image}");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (9:2)\nYou may need an appropriate loader to handle this file type.\n| \n| const Pixel2 = ({ children }) => (\n|   <Device\n|     className=\"pixel-2\"\n|     src={image}");

/***/ })
/******/ ]);