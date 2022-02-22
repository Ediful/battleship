export default (() => {
  const placeShipHighlight = () => {
    const boardItem = document.getElementsByClassName('board-item');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        for (let i = 0; i < 5; i += 1) {
          boardItem[itemPos + i].classList.add('ship-highlight');
        }
      });
    });

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('mouseout', () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        for (let i = 0; i < 5; i += 1) {
          boardItem[itemPos + i].classList.remove('ship-highlight');
        }
      });
    });
  };

  const placeShip = () => {
    const boardItem = document.getElementsByClassName('board-item');

    placeShipHighlight();

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('click', () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        console.log(itemPos);
      });
    });
  };

  const boardItemEvent = (event) => {
    const boardItem = document.getElementsByClassName('board-item');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('mouseout', () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);
        for (let i = 0; i < 5; i += 1) {
          boardItem[itemPos + i].classList.remove('ship-highlight');
        }
      });
    });
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
