import player from './player';
import gameboard from './gameboard';
import ship from './ship';
import ui from './ui';

const player1 = player();
const playerBoard = gameboard();

const player2 = player();
const enemyBoard = gameboard();

const instructions = document.createElement('h2');
instructions.textContent = 'Please place your ships';
document.getElementById('instructions').appendChild(instructions);

const verticalCBLabel = document.createElement('label');
verticalCBLabel.setAttribute('for', 'vertical-checkbox');
verticalCBLabel.textContent = 'Vertical?';
document.getElementById('instructions').appendChild(verticalCBLabel);

const verticalCB = document.createElement('input');
verticalCB.type = 'checkbox';
verticalCB.id = 'vertical-checkbox';
document.getElementById('instructions').appendChild(verticalCB);

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

enemyBoard.placeShip(enemyDestroyer, 0, 0, true);
enemyBoard.placeShip(enemySubmarine, 0, 0, true);
enemyBoard.placeShip(enemyCruiser, 0, 0, true);
enemyBoard.placeShip(enemyBattleship, 0, 0, true);
enemyBoard.placeShip(enemyCarrier, 0, 0, true);

const userInterface = ui(player1, player2, playerBoard, enemyBoard);
userInterface.placeShipPhase(playerShips);
