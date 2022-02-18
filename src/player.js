export default (() => {
  const attack = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
  };

  const computerAttack = (enemyBoard) => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    enemyBoard.receiveAttack(x, y);
  };

  return { attack, computerAttack };
});
