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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const tileOccupiedBy = [];\n  const tileHit = [];\n\n  for (let i = 0; i < 100; i += 1) {\n    tileOccupiedBy.push(null);\n    tileHit.push(false);\n  }\n\n  const getTilesOccupiedBy = () => tileOccupiedBy;\n\n  const getTilesHit = () => tileHit;\n\n  const placeShip = (ship, x, y, isHorizontal) => {\n    if (isHorizontal) {\n      for (let i = 0; i < ship.getLength(); i += 1) {\n        tileOccupiedBy[(i + x) + (y * 10)] = ship;\n      }\n    } else if (!isHorizontal) {\n      for (let i = 0; i < ship.getLength(); i += 1) {\n        tileOccupiedBy[(x + (y * 10)) + (10 * i)] = ship;\n      }\n    }\n  };\n\n  const receiveAttack = (x, y) => {\n    if (tileOccupiedBy[x + (10 * y)] != null) {\n      tileOccupiedBy[x + (10 * y)].hit();\n      tileOccupiedBy[x + (10 * y)] = null;\n    }\n    tileHit[x + (10 * y)] = true;\n  };\n\n  const allShipsSunk = () => {\n    if (tileOccupiedBy.every((e) => e == null)) return true;\n    return false;\n  };\n\n  return {\n    getTilesOccupiedBy, placeShip, receiveAttack, getTilesHit, allShipsSunk,\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\n\nconst player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst player2 = (0,_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst enemyBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst instructions = document.createElement('h2');\ninstructions.textContent = 'Please place your ships';\ndocument.getElementById('instructions').appendChild(instructions);\n\nconst verticalCBLabel = document.createElement('label');\nverticalCBLabel.setAttribute('for', 'vertical-checkbox');\nverticalCBLabel.textContent = 'Vertical?';\ndocument.getElementById('instructions').appendChild(verticalCBLabel);\n\nconst verticalCB = document.createElement('input');\nverticalCB.type = 'checkbox';\nverticalCB.id = 'vertical-checkbox';\ndocument.getElementById('instructions').appendChild(verticalCB);\n\nconst playerShips = [];\nplayerShips.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2));\nplayerShips.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3));\nplayerShips.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3));\nplayerShips.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4));\nplayerShips.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5));\n\nconst enemyDestroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(2);\nconst enemySubmarine = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\nconst enemyCruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(3);\nconst enemyBattleship = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(4);\nconst enemyCarrier = (0,_ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5);\n\nenemyBoard.placeShip(enemyDestroyer, 9, 5, false);\nenemyBoard.placeShip(enemySubmarine, 3, 4, true);\nenemyBoard.placeShip(enemyCruiser, 6, 7, false);\nenemyBoard.placeShip(enemyBattleship, 2, 6, true);\nenemyBoard.placeShip(enemyCarrier, 0, 0, true);\n\nconst userInterface = (0,_ui__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player1, player2, playerBoard, enemyBoard);\nuserInterface.placeShipPhase(playerShips);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const tilesHit = [];\n\n  const attack = (enemyBoard, x, y) => {\n    enemyBoard.receiveAttack(x, y);\n  };\n\n  const computerAttack = (enemyBoard) => {\n    const x = Math.floor(Math.random() * 10);\n    const y = Math.floor(Math.random() * 10);\n\n    if (!tilesHit.includes(x + (10 * y))) {\n      enemyBoard.receiveAttack(x, y);\n      tilesHit.push(x + (10 * y));\n    } else {\n      computerAttack(enemyBoard);\n    }\n  };\n\n  return { attack, computerAttack };\n});\n\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((length) => {\n  let health = length;\n\n  const getLength = () => length;\n\n  const getHealth = () => health;\n\n  const hit = () => {\n    health -= 1;\n  };\n\n  const isSunk = () => {\n    if (health <= 0) return true;\n    return false;\n  };\n\n  return {\n    getLength, hit, isSunk, getHealth,\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((player1, player2, playerBoard, enemyBoard) => {\n  const enemyBoardInitialState = [...enemyBoard.getTilesOccupiedBy()];\n  let playerBoardInitialState = [];\n\n  const drawShips = (gameboard) => {\n    const boardItem = document.getElementsByClassName('board-item player-board');\n\n    Array.from(boardItem).forEach((item) => {\n      const itemPos = Array.from(item.parentNode.children).indexOf(item);\n\n      if (gameboard.getTilesOccupiedBy()[itemPos] != null) {\n        // eslint-disable-next-line no-param-reassign\n        item.style.backgroundColor = 'grey';\n      }\n    });\n  };\n\n  const updateBoards = () => {\n    for (let i = 0; i < 100; i += 1) {\n      if (enemyBoard.getTilesHit()[i] === true) {\n        const tile = document.querySelectorAll(`.enemy-board:nth-child(${i + 1})`);\n        if (enemyBoardInitialState[i] != null) {\n          tile[0].style.backgroundColor = 'Tomato';\n        } else tile[0].style.backgroundColor = 'SteelBlue';\n      }\n      if (playerBoard.getTilesHit()[i] === true) {\n        const tile = document.querySelectorAll(`.player-board:nth-child(${i + 1})`);\n        if (playerBoardInitialState[i] != null) {\n          tile[0].style.backgroundColor = 'Tomato';\n        } else tile[0].style.backgroundColor = 'SteelBlue';\n      }\n    }\n  };\n\n  const attackPhase = () => {\n    while (document.getElementById('instructions').firstChild) {\n      document.getElementById('instructions').removeChild(document.getElementById('instructions').firstChild);\n    }\n\n    const instructions = document.createElement('h2');\n    instructions.textContent = 'Begin attack!';\n    document.getElementById('instructions').appendChild(instructions);\n\n    const boardItem = document.getElementsByClassName('board-item enemy-board');\n\n    Array.from(boardItem).forEach((item) => {\n      item.addEventListener('click', () => {\n        const itemPos = Array.from(item.parentNode.children).indexOf(item);\n\n        player1.attack(enemyBoard, (itemPos % 10), Math.floor(itemPos / 10));\n        player2.computerAttack(playerBoard);\n        updateBoards();\n        if (enemyBoard.allShipsSunk() === true) {\n          document.querySelector('h2').textContent = 'YOU WIN! Congratulations!';\n        }\n        if (playerBoard.allShipsSunk() === true) {\n          document.querySelector('h2').textContent = 'GAME OVER! Better luck next time!';\n        }\n      });\n    });\n  };\n\n  const placeShipPhase = (ships) => {\n    const boardItem = document.getElementsByClassName('board-item player-board');\n    const isVerticalCB = document.querySelector('input');\n\n    let k = 0;\n\n    Array.from(boardItem).forEach((item) => {\n      item.addEventListener('mouseenter', () => {\n        if (k < 5) {\n          const isVertical = isVerticalCB.checked;\n          const itemPos = Array.from(item.parentNode.children).indexOf(item);\n          if (!isVertical && itemPos % 10 <= 10 - ships[k].getLength()) {\n            for (let i = 0; i < ships[k].getLength(); i += 1) {\n              boardItem[itemPos + i].classList.add('ship-highlight');\n            }\n          } else if (isVertical && itemPos < 110 - (10 * ships[k].getLength())) {\n            for (let i = 0; i < ships[k].getLength(); i += 1) {\n              boardItem[itemPos + (i * 10)].classList.add('ship-highlight');\n            }\n          } else {\n            boardItem[itemPos].classList.add('invalid-location');\n          }\n        }\n      });\n      item.addEventListener('mouseout', () => {\n        if (k < 5) {\n          const isVertical = isVerticalCB.checked;\n          const itemPos = Array.from(item.parentNode.children).indexOf(item);\n          if (!isVertical && itemPos % 10 <= 10 - ships[k].getLength()) {\n            for (let i = 0; i < ships[k].getLength(); i += 1) {\n              boardItem[itemPos + i].classList.remove('ship-highlight');\n            }\n          } else if (isVertical && itemPos < 110 - (10 * ships[k].getLength())) {\n            for (let i = 0; i < ships[k].getLength(); i += 1) {\n              boardItem[itemPos + (i * 10)].classList.remove('ship-highlight');\n            }\n          } else {\n            boardItem[itemPos].classList.remove('invalid-location');\n          }\n        }\n      });\n      item.addEventListener('click', () => {\n        if (k < 5) {\n          const isVertical = isVerticalCB.checked;\n          const itemPos = Array.from(item.parentNode.children).indexOf(item);\n          playerBoard.placeShip(ships[k], (itemPos % 10), Math.floor(itemPos / 10), !isVertical);\n          drawShips(playerBoard);\n          k += 1;\n          if (k === 5) {\n            playerBoardInitialState = [...playerBoard.getTilesOccupiedBy()];\n            attackPhase();\n          }\n        }\n      });\n    });\n  };\n\n  return {\n    placeShipPhase,\n  };\n});\n\n\n//# sourceURL=webpack://battleship/./src/ui.js?");

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