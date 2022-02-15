import ship from './ship.js';

test('Get Ship Health', () => {
  const ship1 = ship(3);
  expect(ship1.getHealth()).toStrictEqual([false, false, false]);
});

test('Hit Ship', () => {
  const ship1 = ship(3);
  ship1.hit(2);
  expect(ship1.getHealth()).toStrictEqual([false,false,true]);
});

test('Sunk Ship', () => {
  const ship1 = ship(3);
  ship1.hit(0);
  ship1.hit(1);
  ship1.hit(2);
  expect(ship1.isSunk()).toBe(true);
})