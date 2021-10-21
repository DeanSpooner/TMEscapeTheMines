const { solve } = require("./index.js");

describe("returns an array of strings giving directions from the start to finish", () => {
  it("returns a simple array of 'right' strings", () => {
    const map1 = [[true], [true]];
    const miner1 = { x: 0, y: 0 };
    const exit1 = { x: 1, y: 0 };
    expect(solve(map1, miner1, exit1)).toEqual(["right"]);
    const map2 = [[true], [true], [true]];
    const miner2 = { x: 0, y: 0 };
    const exit2 = { x: 2, y: 0 };
    expect(solve(map2, miner2, exit2)).toEqual(["right", "right"]);
  });
  it("returns a simple array of 'down' strings", () => {
    const map1 = [[true, true]];
    const miner1 = { x: 0, y: 0 };
    const exit1 = { x: 0, y: 1 };
    expect(solve(map1, miner1, exit1)).toEqual(["down"]);
    const map2 = [[true, true, true]];
    const miner2 = { x: 0, y: 0 };
    const exit2 = { x: 0, y: 2 };
    expect(solve(map2, miner2, exit2)).toEqual(["down", "down"]);
  });
  it("returns a simple array of 'right' and 'down' strings", () => {
    const map1 = [
      [true, false],
      [true, true],
    ];
    const miner1 = { x: 0, y: 0 };
    const exit1 = { x: 1, y: 1 };
    expect(solve(map1, miner1, exit1)).toEqual(["right", "down"]);
    const map2 = [
      [true, false, false],
      [true, true, true],
    ];
    const miner2 = { x: 0, y: 0 };
    const exit2 = { x: 1, y: 2 };
    expect(solve(map2, miner2, exit2)).toEqual(["right", "down", "down"]);
  });
  it("returns a simple array of 'right' and 'down' strings that may not go in a simple right-down order", () => {
    const map1 = [
      [true, true],
      [false, true],
    ];
    const miner1 = { x: 0, y: 0 };
    const exit1 = { x: 1, y: 1 };
    expect(solve(map1, miner1, exit1)).toEqual(["down", "right"]);
  });
});
