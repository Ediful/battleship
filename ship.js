export default ((length) => {
  const health = [];

  for (let i = 0; i < length; i++) {
    health.push(false);
  }

  const getHealth = () => health;

  const hit = (position) => {
    health[position] = true;
  };

  const isSunk = () => {
    let isSunk = true;
    for (let i = 0; i < health.length; i++) {
      if (health[i] == false) return false;
    }
    return isSunk;
  };

  return { hit, isSunk, getHealth };
});
