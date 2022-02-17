import ship from './ship';
import gameboard from './gameboard';

test('Place Ship on Gameboard Horizontally', () => {
  const gameboard1 = gameboard();
  const ship1 = ship(3);
  gameboard1.placeShip(ship1, 2, 1, true);
  expect(gameboard1.getTilesOccupiedBy().slice(12, 15)).toStrictEqual([ship1, ship1, ship1]);
});

test('Place Ship on Gameboard Vertically', () => {
  const gameboard2 = gameboard();
  const ship2 = ship(3);
  gameboard2.placeShip(ship2, 3, 4, false);

  expect(
    [
      gameboard2.getTilesOccupiedBy()[43],
      gameboard2.getTilesOccupiedBy()[53],
      gameboard2.getTilesOccupiedBy()[63],
    ],
  ).toStrictEqual([ship2, ship2, ship2]);
});

test('Attack a location on the gameboard', () => {
  const board = gameboard();
  const battleship = ship(4);

  board.placeShip(battleship, 1, 1, false);

  board.receiveAttack(1, 1);

  expect(battleship.getHealth()).toBe(3);
});

test('Sink ship by attacking on the gameboard', () => {
  const board = gameboard();
  const battleship = ship(4);

  board.placeShip(battleship, 1, 1, true);

  board.receiveAttack(1, 1);
  board.receiveAttack(2, 1);
  board.receiveAttack(3, 1);
  board.receiveAttack(4, 1);

  expect(battleship.isSunk()).toBe(true);
});

test('Attack missed all ships', () => {
  const board = gameboard();

  board.receiveAttack(0, 0);

  expect(board.getTilesHit()[0]).toBe(true);
});

test('All Ships Sunk', () => {
  const board = gameboard();
  const battleship = ship(4);

  board.placeShip(battleship, 1, 1, true);

  board.receiveAttack(1, 1);
  board.receiveAttack(2, 1);
  board.receiveAttack(3, 1);
  board.receiveAttack(4, 1);

  expect(board.allShipsSunk()).toBe(true);
});
