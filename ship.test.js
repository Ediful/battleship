import ship from './ship.js';

test('Get Ship Length', () => {
  const ship1 = ship('ship1', 3);
  expect(ship1.getLength()).toBe(3);
});

test('Get Ship Health', () => {
  const ship1 = ship('ship1', 3);
  expect(ship1.getHealth()).toStrictEqual(3);
});

test('Hit Ship', () => {
  const ship1 = ship('ship1', 3);
  ship1.hit();
  expect(ship1.getHealth()).toStrictEqual(2);
});

test('Sunk Ship', () => {
  const ship1 = ship('ship1', 3);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk()).toBe(true);
})