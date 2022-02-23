export default (() => {
  const boardItemEvent = (type) => {
    const boardItem = document.getElementsByClassName('board-item player-board');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener(type, () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        if (type === 'click') {
          // place ship on board
        }
        if (type === 'mouseenter' || type === 'mouseout') {
          // horizontal highlight
          if (document.contains(boardItem[itemPos + 4])) {
            for (let i = 0; i < 5; i += 1) {
              boardItem[itemPos + i].classList.toggle('ship-highlight');
            }
          }
          // [TODO] vertical highlight
        }
      });
    });
  };

  const placeShip = () => {
    boardItemEvent('mouseenter');
    boardItemEvent('mouseout');
    boardItemEvent('click');
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
