const { solve } = require("./index.js");

describe("returns a matching number to a numeral", () => {
  it("returns one simple Roman Numeral's number", () => {
    const map = [[true], [true]];
    const miner = { x: 0, y: 0 };
    const exit = { x: 1, y: 0 };
    expect(solve(map, miner, exit)).toBe("right");
  });
});
