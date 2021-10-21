const solve = (map, miner, exit) => {
  const totalRight = exit.x - miner.x;
  const totalDown = exit.y - miner.y;
  const finalArray = [];

  let currentX = miner.x;
  let currentY = miner.y;

  for (let i = 0; i < exit.x; i++) {
    if (currentX < totalRight && map[currentX + 1][currentY] === true) {
      finalArray.push("right");
      miner.x += 1;
    } else if (currentY < totalDown) {
      finalArray.push("down");
      miner.y += 1;
    }
  }

  return finalArray;
};

module.exports = {
  solve,
};
