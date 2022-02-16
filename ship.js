export default ((name, length) => {
  let health = length;

  const getName = () => name;

  const getLength = () => length;

  const getHealth = () => health;

  const hit = (position) => {
    health--;
  };

  const isSunk = () => {
    if (health <= 0) return true;
    else return false;
  };

  return { getName, getLength, hit, isSunk, getHealth };
});
