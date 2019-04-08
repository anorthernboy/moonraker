const { expect } = require("chai");
const { createArray } = require("../utils.js");

describe("createArray", () => {
  it("returns correct array for 0", () => {
    const actual = createArray(0);
    const expected = [0];
    expect(actual).to.eql(expected);
  });

  it("returns correct array for 1", () => {
    const actual = createArray(1);
    const expected = [0, 1];
    expect(actual).to.eql(expected);
  });

  it("returns correct array for n", () => {
    const actual = createArray(12);
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(actual).to.eql(expected);
  });
});
