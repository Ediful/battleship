import gameboard from '../src/gameboard';
import player from '../src/player';
import ship from '../src/ship';

test('Player attacks enemy board', () => {
  const player1 = player();
  const enemyBoard = gameboard();
  const ship1 = ship(3);

  enemyBoard.placeShip(ship1, 0, 0, true);
  player1.attack(enemyBoard, 0, 0);

  expect(ship1.getHealth()).toBe(2);
});

test('Computer attacks player board', () => {
  const enemy = player();
  const playerBoard = gameboard();

  enemy.computerAttack(playerBoard);

  expect(playerBoard.getTilesHit().includes(true)).toBe(true);
});
