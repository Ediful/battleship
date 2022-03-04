export default ((player1, player2, playerBoard, enemyBoard) => {
  const enemyBoardInitialState = [...enemyBoard.getTilesOccupiedBy()];
  let playerBoardInitialState = [];

  const drawShips = (gameboard) => {
    const boardItem = document.getElementsByClassName('board-item player-board');

    Array.from(boardItem).forEach((item) => {
      const itemPos = Array.from(item.parentNode.children).indexOf(item);

      if (gameboard.getTilesOccupiedBy()[itemPos] != null) {
        // eslint-disable-next-line no-param-reassign
        item.style.backgroundColor = 'pink';
      }
    });
  };

  const updateBoards = () => {
    for (let i = 0; i < 100; i += 1) {
      if (enemyBoard.getTilesHit()[i] === true) {
        const tile = document.querySelectorAll(`.enemy-board:nth-child(${i + 1})`);
        if (enemyBoardInitialState[i] != null) {
          tile[0].style.backgroundColor = 'red';
        } else tile[0].style.backgroundColor = 'orange';
      }
      if (playerBoard.getTilesHit()[i] === true) {
        const tile = document.querySelectorAll(`.player-board:nth-child(${i + 1})`);
        // do another check for ship hit or miss
        if (playerBoardInitialState[i] != null) {
          tile[0].style.backgroundColor = 'red';
        } else tile[0].style.backgroundColor = 'orange';
      }
    }
  };

  const playerAttack = () => {
    const boardItem = document.getElementsByClassName('board-item enemy-board');

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('click', () => {
        const itemPos = Array.from(item.parentNode.children).indexOf(item);

        player1.attack(enemyBoard, (itemPos % 10), Math.floor(itemPos / 10));
        player2.computerAttack(playerBoard);
        updateBoards();
      });
    });
  };

  const placeShip = (ships) => {
    const boardItem = document.getElementsByClassName('board-item player-board');
    const isVerticalCB = document.querySelector('input');

    let k = 0;

    Array.from(boardItem).forEach((item) => {
      item.addEventListener('mouseenter', () => {
        if (k < 5) {
          const isVertical = isVerticalCB.checked;
          const itemPos = Array.from(item.parentNode.children).indexOf(item);
          if (!isVertical && itemPos % 10 <= 10 - ships[k].getLength()) {
            for (let i = 0; i < ships[k].getLength(); i += 1) {
              boardItem[itemPos + i].classList.add('ship-highlight');
            }
          } else if (isVertical && itemPos < 110 - (10 * ships[k].getLength())) {
            for (let i = 0; i < ships[k].getLength(); i += 1) {
              boardItem[itemPos + (i * 10)].classList.add('ship-highlight');
            }
          } else {
            boardItem[itemPos].classList.add('invalid-location');
          }
        }
      });
      item.addEventListener('mouseout', () => {
        if (k < 5) {
          const isVertical = isVerticalCB.checked;
          const itemPos = Array.from(item.parentNode.children).indexOf(item);
          if (!isVertical && itemPos % 10 <= 10 - ships[k].getLength()) {
            for (let i = 0; i < ships[k].getLength(); i += 1) {
              boardItem[itemPos + i].classList.remove('ship-highlight');
            }
          } else if (isVertical && itemPos < 110 - (10 * ships[k].getLength())) {
            for (let i = 0; i < ships[k].getLength(); i += 1) {
              boardItem[itemPos + (i * 10)].classList.remove('ship-highlight');
            }
          } else {
            boardItem[itemPos].classList.remove('invalid-location');
          }
        }
      });
      item.addEventListener('click', () => {
        if (k < 5) {
          const isVertical = isVerticalCB.checked;
          const itemPos = Array.from(item.parentNode.children).indexOf(item);
          playerBoard.placeShip(ships[k], (itemPos % 10), Math.floor(itemPos / 10), !isVertical);
          drawShips(playerBoard);
          k += 1;
          if (k === 5) {
            playerBoardInitialState = [...playerBoard.getTilesOccupiedBy()];
            playerAttack();
          }
        }
      });
    });
  };

  return {
    placeShip,
  };
});
