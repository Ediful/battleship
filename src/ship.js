export default ((length) => {
  let health = length;

  const getLength = () => length;

  const getHealth = () => health;

  const hit = () => {
    health -= 1;
  };

  const isSunk = () => {
    if (health <= 0) return true;
    return false;
  };

  return {
    getLength, hit, isSunk, getHealth,
  };
});
