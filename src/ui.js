export default (() => {
  const placeShip = () => {
    const boardItem = document.getElementsByClassName('board-item');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('mouseover', () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        // boardItem[itemPos].classList.toggle('ship-highlight:hover');
        for (let i = 0; i < 5; i += 1) {
          // boardItem[itemPos + 1].style.backgroundColor = 'red';
          boardItem[itemPos + 1].classList.add('ship-highlight');
        }
      });
    });
  };

  const placeShipHighlight = () => {

  };

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
