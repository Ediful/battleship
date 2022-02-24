import ship from './ship'

export default (() => {
  const tileOccupiedBy = [];
  const tileHit = [];

  for (let i = 0; i < 100; i += 1) {
    tileOccupiedBy.push(null);
    tileHit.push(false);
  }

  const getTilesOccupiedBy = () => tileOccupiedBy;

  const getTilesHit = () => tileHit;

  const placeShip = (ship, x, y, isHorizontal) => {
    if (isHorizontal) {
      for (let i = 0; i < ship.getLength(); i += 1) {
        tileOccupiedBy[(i + x) + (y * 10)] = ship;
      }
    } else if (!isHorizontal) {
      for (let i = 0; i < ship.getLength(); i += 1) {
        tileOccupiedBy[(x + (y * 10)) + (10 * i)] = ship;
      }
    }
  };

  const receiveAttack = (x, y) => {
    if (tileOccupiedBy[x + (10 * y)] != null) {
      tileOccupiedBy[x + (10 * y)].hit();
      tileOccupiedBy[x + (10 * y)] = null;
    } else {
      tileHit[x + (10 * y)] = true;
    }
  };

  const allShipsSunk = () => {
    if (tileOccupiedBy.every((e) => e == null)) return true;
    return false;
  };

  return {
    getTilesOccupiedBy, placeShip, receiveAttack, getTilesHit, allShipsSunk,
  };
});
