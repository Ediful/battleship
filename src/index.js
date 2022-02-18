import player from './player';
import gameboard from './gameboard';

window.addEventListener('load', () => {
  const player1 = player();
  const playerBoard = gameboard();

  const enemy = player();
  const enemyBoard = gameboard();

  document.querySelector('h2').textContent = 'Place your ships';
});
