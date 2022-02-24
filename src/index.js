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

const disa = ui();
const boat = ship(2);
disa.placeShip(boat, playerBoard);
