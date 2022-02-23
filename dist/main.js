/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n// import player from './player';\n// import gameboard from './gameboard';\n\n\n// const player1 = player();\n// const playerBoard = gameboard();\n\n// const enemy = player();\n// const enemyBoard = gameboard();\n\ndocument.querySelector('h2').textContent = 'Place your ships';\nconst verticalCB = document.createElement('input');\nverticalCB.type = 'checkbox';\ndocument.querySelector('h2').appendChild(verticalCB);\n\nconst disa = (0,_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ndisa.placeShip(2);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const boardItemEvent = (type, length) => {\n    const boardItem = document.getElementsByClassName('board-item player-board');\n    const isVerticalCB = document.querySelector('input');\n\n    Array.from(boardItem).forEach((item) => {\n      item.addEventListener(type, () => {\n        const itemPos = Array.from(item.parentNode.children).indexOf(item);\n        const isVertical = isVerticalCB.checked;\n\n        // ship placement\n        if (type === 'click') {\n          // [TODO] place ship on board\n        }\n\n        // ship placement highlight\n        if (type === 'mouseenter' || type === 'mouseout') {\n          if (!isVertical && itemPos % 10 <= 10 - length) {\n            for (let i = 0; i < length; i += 1) {\n              boardItem[itemPos + i].classList.toggle('ship-highlight');\n            }\n          } else if (isVertical && itemPos < 110 - (10 * length)) {\n            for (let i = 0; i < length; i += 1) {\n              boardItem[itemPos + (i * 10)].classList.toggle('ship-highlight');\n            }\n          } else {\n            boardItem[itemPos].classList.toggle('invalid-location');\n          }\n        }\n      });\n    });\n  };\n\n  const placeShip = (length) => {\n    boardItemEvent('mouseenter', length);\n    boardItemEvent('mouseout', length);\n    boardItemEvent('click', length);\n  };\n\n  // let's try to keep these other functions as seperate as possible from\n  // the previous mess\n  const drawShips = () => {\n\n  };\n\n  const drawHits = () => {\n\n  };\n\n  const drawMisses = () => {\n\n  };\n\n  return {\n    drawShips, drawHits, drawMisses, placeShip,\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;