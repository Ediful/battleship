import player from './player';
import gameboard from './gameboard';
import ship from './ship';
import ui from './ui';

const player1 = player();
const playerBoard = gameboard();

const player2 = player();
const enemyBoard = gameboard();

document.querySelector('h2').textContent = 'Place your ships';
const verticalCB = document.createElement('input');
verticalCB.type = 'checkbox';
document.querySelector('h2').appendChild(verticalCB);

const playerShips = [];
playerShips.push(ship(2));
playerShips.push(ship(3));
playerShips.push(ship(3));
playerShips.push(ship(4));
playerShips.push(ship(5));

const enemyDestroyer = ship(2);
const enemySubmarine = ship(3);
const enemyCruiser = ship(3);
const enemyBattleship = ship(4);
const enemyCarrier = ship(5);

enemyBoard.placeShip(enemyCarrier, 0, 0, true);

const userInterface = ui(player1, player2, playerBoard, enemyBoard);
userInterface.placeShip(playerShips);
