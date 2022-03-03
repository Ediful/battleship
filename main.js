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

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const tileOccupiedBy = [];\r\n  const tileHit = [];\r\n\r\n  for (let i = 0; i < 100; i += 1) {\r\n    tileOccupiedBy.push(null);\r\n    tileHit.push(false);\r\n  }\r\n\r\n  const getTilesOccupiedBy = () => tileOccupiedBy;\r\n\r\n  const getTilesHit = () => tileHit;\r\n\r\n  const placeShip = (ship, x, y, isHorizontal) => {\r\n    if (isHorizontal) {\r\n      for (let i = 0; i < ship.getLength(); i += 1) {\r\n        tileOccupiedBy[(i + x) + (y * 10)] = ship;\r\n      }\r\n    } else if (!isHorizontal) {\r\n      for (let i = 0; i < ship.getLength(); i += 1) {\r\n        tileOccupiedBy[(x + (y * 10)) + (10 * i)] = ship;\r\n      }\r\n    }\r\n  };\r\n\r\n  const receiveAttack = (x, y) => {\r\n    if (tileOccupiedBy[x + (10 * y)] != null) {\r\n      tileOccupiedBy[x + (10 * y)].hit();\r\n      tileOccupiedBy[x + (10 * y)] = null;\r\n    } else {\r\n      tileHit[x + (10 * y)] = true;\r\n    }\r\n  };\r\n\r\n  const allShipsSunk = () => {\r\n    if (tileOccupiedBy.every((e) => e == null)) return true;\r\n    return false;\r\n  };\r\n\r\n  return {\r\n    getTilesOccupiedBy, placeShip, receiveAttack, getTilesHit, allShipsSunk,\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n// import player from './player';\r\n\r\n\r\n\r\n\r\n// const player1 = player();\r\nconst playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n// const enemy = player();\r\n// const enemyBoard = gameboard();\r\n\r\ndocument.querySelector('h2').textContent = 'Place your ships';\r\nconst verticalCB = document.createElement('input');\r\nverticalCB.type = 'checkbox';\r\ndocument.querySelector('h2').appendChild(verticalCB);\r\n\r\nconst userInterface = (0,_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nconst destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(2);\r\nconst submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3);\r\nconst cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(3);\r\nconst battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(4);\r\nconst carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(5);\r\n\r\nlet boatPlaced = false;\r\nboatPlaced = userInterface.placeShip(destroyer, playerBoard);\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((length) => {\r\n  let health = length;\r\n\r\n  const getLength = () => length;\r\n\r\n  const getHealth = () => health;\r\n\r\n  const hit = () => {\r\n    health -= 1;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    if (health <= 0) return true;\r\n    return false;\r\n  };\r\n\r\n  return {\r\n    getLength, hit, isSunk, getHealth,\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n  const boardItemEvent = (type, ship, gameboard) => {\r\n    const boardItem = document.getElementsByClassName('board-item player-board');\r\n    const isVerticalCB = document.querySelector('input');\r\n\r\n    Array.from(boardItem).forEach((item) => {\r\n      item.addEventListener(type, () => {\r\n        const itemPos = Array.from(item.parentNode.children).indexOf(item);\r\n        const isVertical = isVerticalCB.checked;\r\n\r\n        // ship placement\r\n        // [TODO] implement valid spot checking\r\n        if (type === 'click') {\r\n          gameboard.placeShip(ship, (itemPos%10), Math.floor(itemPos/10), !isVertical);\r\n          drawShips(gameboard);\r\n        }\r\n\r\n        // ship placement highlight\r\n        if (type === 'mouseenter' || type === 'mouseout') {\r\n          if (!isVertical && itemPos % 10 <= 10 - ship.getLength()) {\r\n            for (let i = 0; i < ship.getLength(); i += 1) {\r\n              boardItem[itemPos + i].classList.toggle('ship-highlight');\r\n            }\r\n          } else if (isVertical && itemPos < 110 - (10 * ship.getLength())) {\r\n            for (let i = 0; i < ship.getLength(); i += 1) {\r\n              boardItem[itemPos + (i * 10)].classList.toggle('ship-highlight');\r\n            }\r\n          } else {\r\n            boardItem[itemPos].classList.toggle('invalid-location');\r\n          }\r\n        }\r\n      });\r\n    });\r\n  };\r\n\r\n  // [TODO] Uncouple this for state machine\r\n  const placeShip = (ship, gameboard) => {\r\n    boardItemEvent('mouseenter', ship);\r\n    boardItemEvent('mouseout', ship);\r\n    boardItemEvent('click', ship, gameboard);\r\n  };\r\n\r\n  // let's try to keep these other functions as seperate as possible from\r\n  // the previous mess\r\n  const drawShips = (gameboard) => {\r\n    const boardItem = document.getElementsByClassName('board-item player-board');\r\n    \r\n    Array.from(boardItem).forEach((item) => {\r\n      const itemPos = Array.from(item.parentNode.children).indexOf(item);\r\n\r\n      if (gameboard.getTilesOccupiedBy()[itemPos] != null){\r\n        item.style.backgroundColor = \"pink\";\r\n      }\r\n    });\r\n  };\r\n\r\n  const drawHits = () => {\r\n\r\n  };\r\n\r\n  const drawMisses = () => {\r\n\r\n  };\r\n\r\n  return {\r\n    drawShips, drawHits, drawMisses, placeShip,\r\n  };\r\n});\r\n\n\n//# sourceURL=webpack://battleship/./src/ui.js?");

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