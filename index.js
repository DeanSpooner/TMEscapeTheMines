const solve = (map, miner, exit) => {
  const totalRight = exit.x - miner.x;
  const totalDown = exit.y - miner.y;
  const finalArray = [];

  for (let i = 0; i < totalRight; i++) {
    finalArray.push("right");
  }

  for (let i = 0; i < totalDown; i++) {
    finalArray.push("down");
  }

  return finalArray;
};

module.exports = {
  solve,
};
