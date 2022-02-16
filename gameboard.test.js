import ship from './ship.js'
import gameboard from './gameboard.js'

test('Place Ship on Gameboard Horizontally', () => {
    const ship1 = ship('ship1', 3);
    gameboard.placeShip(ship1, 2, 1, true);
    expect(gameboard.getTilesOccupiedBy().slice(12, 15)).toStrictEqual(['ship1', 'ship1', 'ship1']);
});

test('Place Ship on Gameboard Vertically', () => {
    const ship2 = ship('ship2', 3);
    gameboard.placeShip(ship2, 3, 4, false);

    expect(
        [gameboard.getTilesOccupiedBy()[43],
        gameboard.getTilesOccupiedBy()[53],
        gameboard.getTilesOccupiedBy()[63]]
    ).toStrictEqual(['ship2', 'ship2', 'ship2']);
});

