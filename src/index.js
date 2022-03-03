// import player from './player';
import gameboard from './gameboard';
import ship from './ship';
import ui from './ui';

// const player1 = player();
const playerBoard = gameboard();

// const enemy = player();
// const enemyBoard = gameboard();

document.querySelector('h2').textContent = 'Place your ships';
const verticalCB = document.createElement('input');
verticalCB.type = 'checkbox';
document.querySelector('h2').appendChild(verticalCB);

const userInterface = ui();
const destroyer = ship(2);
const submarine = ship(3);
const cruiser = ship(3);
const battleship = ship(4);
const carrier = ship(5);

let boatPlaced = false;
boatPlaced = userInterface.placeShip(destroyer, playerBoard);