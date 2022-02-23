export default (() => {
  const boardItemEvent = (type, length) => {
    const boardItem = document.getElementsByClassName('board-item player-board');
    const isVerticalCB = document.querySelector('input');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener(type, () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        const isVertical = isVerticalCB.checked;

        // ship placement
        if (type === 'click') {
          // [TODO] place ship on board
        }

        // ship placement highlight
        if (type === 'mouseenter' || type === 'mouseout') {
          if (!isVertical && itemPos % 10 <= 10 - length) {
            for (let i = 0; i < length; i += 1) {
              boardItem[itemPos + i].classList.toggle('ship-highlight');
            }
          } else if (isVertical && itemPos < 110 - (10 * length)) {
            for (let i = 0; i < length; i += 1) {
              boardItem[itemPos + (i * 10)].classList.toggle('ship-highlight');
            }
          } else {
            boardItem[itemPos].classList.toggle('invalid-location');
          }
        }
      });
    });
  };

  const placeShip = (length) => {
    boardItemEvent('mouseenter', length);
    boardItemEvent('mouseout', length);
    boardItemEvent('click', length);
  };

  // let's try to keep these other functions as seperate as possible from
  // the previous mess
  const drawShips = () => {

  };

  const drawHits = () => {

  };

  const drawMisses = () => {

  };

  return {
    drawShips, drawHits, drawMisses, placeShip,
  };
});
