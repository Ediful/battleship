export default (() => {
  const boardItemEvent = (type, ship, gameboard) => {
    const boardItem = document.getElementsByClassName('board-item player-board');
    const isVerticalCB = document.querySelector('input');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener(type, () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        const isVertical = isVerticalCB.checked;

        // ship placement
        // [TODO] implement valid spot checking
        if (type === 'click') {
          gameboard.placeShip(ship, (itemPos%10), Math.floor(itemPos/10), !isVertical);
          drawShips(gameboard);
        }

        // ship placement highlight
        if (type === 'mouseenter' || type === 'mouseout') {
          if (!isVertical && itemPos % 10 <= 10 - ship.getLength()) {
            for (let i = 0; i < ship.getLength(); i += 1) {
              boardItem[itemPos + i].classList.toggle('ship-highlight');
            }
          } else if (isVertical && itemPos < 110 - (10 * ship.getLength())) {
            for (let i = 0; i < ship.getLength(); i += 1) {
              boardItem[itemPos + (i * 10)].classList.toggle('ship-highlight');
            }
          } else {
            boardItem[itemPos].classList.toggle('invalid-location');
          }
        }
      });
    });
  };

  const placeShip = (ship, gameboard) => {
    boardItemEvent('mouseenter', ship);
    boardItemEvent('mouseout', ship);
    boardItemEvent('click', ship, gameboard);
  };

  // let's try to keep these other functions as seperate as possible from
  // the previous mess
  const drawShips = (gameboard) => {
    const boardItem = document.getElementsByClassName('board-item player-board');
    
    Array.from(boardItem).forEach((item) => {
      const itemPos = Array.from(item.parentNode.children).indexOf(item);

      if (gameboard.getTilesOccupiedBy()[itemPos] != null){
        item.style.backgroundColor = "pink";
      }
    });
  };

  const drawHits = () => {

  };

  const drawMisses = () => {

  };

  return {
    drawShips, drawHits, drawMisses, placeShip,
  };
});
