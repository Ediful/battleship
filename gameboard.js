export default (() => {
    let tileOccupiedBy = [];
    let tileHit = [];

    for (let i = 0; i < 100; i++) {
        tileOccupiedBy.push("");
        tileHit.push(false);
    }

    const getTilesOccupiedBy = () => tileOccupiedBy;

    const placeShip = (ship, x, y, isHorizontal) => {
        if (isHorizontal) {
            for (let i = 0; i < ship.getLength(); i++) {
                tileOccupiedBy[(i + x) + (y * 10)] = ship.getName();
            }
        }
        else if (!isHorizontal) {
            for (let i = 0; i < ship.getLength(); i++) {
                tileOccupiedBy[(x + (y * 10)) + (10 * i)] = ship.getName();
            }
        }
    };

    const receiveAttack = (x, y) => {
        if (tileOccupiedBy[x + (10 * y)] != "") {
            // find ship in current spot
            // call hit method on ship
        };
    };

    const allShipsSunk = () => {

    };

    return { getTilesOccupiedBy, placeShip };
})();