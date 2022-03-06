export default (() => {
  const tilesHit = [];

  const attack = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
  };

  const computerAttack = (enemyBoard) => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    if (!tilesHit.includes(x + (10 * y))) {
      enemyBoard.receiveAttack(x, y);
      tilesHit.push(x + (10 * y));
    } else {
      computerAttack(enemyBoard);
    }
  };

  return { attack, computerAttack };
});
