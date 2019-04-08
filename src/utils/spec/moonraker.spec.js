const { expect } = require("chai");
const { handleTurn, handleMove, moonRaker } = require("../moonraker.js");

describe("handleTurn", () => {
  it("shifts each element of string one place to the right when rotating buggy left and starting with heading North", () => {
    const actual = handleTurn("NESW", "L");
    const expected = "WNES";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the right when rotating buggy left and starting with heading South", () => {
    const actual = handleTurn("SWNE", "L");
    const expected = "ESWN";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the right when rotating buggy left and starting with heading East", () => {
    const actual = handleTurn("ESWN", "L");
    const expected = "NESW";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the right when rotating buggy left and starting with heading West", () => {
    const actual = handleTurn("WNES", "L");
    const expected = "SWNE";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the left when rotating buggy right and starting with heading North", () => {
    const actual = handleTurn("NESW", "R");
    const expected = "ESWN";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the left when rotating buggy right and starting with heading South", () => {
    const actual = handleTurn("SWNE", "R");
    const expected = "WNES";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the left when rotating buggy right and starting with heading East", () => {
    const actual = handleTurn("ESWN", "R");
    const expected = "SWNE";
    expect(actual).to.equal(expected);
  });

  it("shifts each element of string one place to the left when rotating buggy right and starting with heading West", () => {
    const actual = handleTurn("WNES", "R");
    const expected = "NESW";
    expect(actual).to.equal(expected);
  });
});

describe("handleMove", () => {
  it("does not change coordinates of buggy if grid size is (0, 0)", () => {
    const grid = { x: 0, y: 0 };
    const currPosition = { x: 0, y: 0 };
    const currHeading = "NESW";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 0, y: 0 };
    expect(actual).to.eql(expected);
  });

  it("moves the buggy in a positive direction on the y-axis if currHeading is NESW and buggy is not at north-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 3, y: 0 };
    const currHeading = "NESW";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 3, y: 1 };
    expect(actual).to.eql(expected);
  });

  it("does not change coordinates if currHeading is NESW and buggy is at north-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 3, y: 5 };
    const currHeading = "NESW";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 3, y: 5 };
    expect(actual).to.eql(expected);
  });

  it("moves the buggy in a negative direction on the y-axis if currHeading is SWNE and buggy is not at south-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 3, y: 5 };
    const currHeading = "SWNE";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 3, y: 4 };
    expect(actual).to.eql(expected);
  });

  it("does not change coordinates if currHeading is SWNE and buggy is at south-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 3, y: 0 };
    const currHeading = "SWNE";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 3, y: 0 };
    expect(actual).to.eql(expected);
  });

  it("moves the buggy in a positive direction on the x-axis if currHeading is ESWN and buggy is not at east-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 3, y: 2 };
    const currHeading = "ESWN";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 4, y: 2 };
    expect(actual).to.eql(expected);
  });

  it("does not change coordinates if currHeading is ESWN and buggy is at east-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 5, y: 5 };
    const currHeading = "ESWN";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 5, y: 5 };
    expect(actual).to.eql(expected);
  });

  it("moves the buggy in a negative direction on the x-axis if currHeading is WNES and buggy is not at west-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 3, y: 5 };
    const currHeading = "WNES";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 2, y: 5 };
    expect(actual).to.eql(expected);
  });

  it("does not change coordinates if currHeading is WNES and buggy is at west-limit of grid", () => {
    const grid = { x: 5, y: 5 };
    const currPosition = { x: 0, y: 0 };
    const currHeading = "WNES";
    const actual = handleMove(grid, currPosition, currHeading);
    const expected = { x: 0, y: 0 };
    expect(actual).to.eql(expected);
  });
});

describe("moonRaker", () => {
  it("returns error message if buggy position is not within grid on x-axis", () => {
    const grid = "5 5";
    const startingPosition = "6 2 N";
    const directions = "LMLMLMLMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "Moonraker is off grid!!";
    expect(actual).to.equal(expected);
  });

  it("returns error message if buggy position is not within grid on y-axis", () => {
    const grid = "5 5";
    const startingPosition = "1 6 N";
    const directions = "LMLMLMLMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "Moonraker is off grid!!";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading NORTH and only LEFT turns", () => {
    const grid = "5 5";
    const startingPosition = "1 2 N";
    const directions = "LMLMLMLMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "1 3 N";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading NORTH and only RIGHT turns", () => {
    const grid = "5 5";
    const startingPosition = "3 3 N";
    const directions = "MMRMMRMRRM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "5 5 N";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading NORTH and turns in both directions", () => {
    const grid = "5 5";
    const startingPosition = "3 2 N";
    const directions = "MRMLMLLMMRM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "3 2 W";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading SOUTH and only LEFT turns", () => {
    const grid = "5 5";
    const startingPosition = "1 2 S";
    const directions = "LMLMLMLMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "1 1 S";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading SOUTH and only RIGHT turns", () => {
    const grid = "5 5";
    const startingPosition = "3 3 S";
    const directions = "MMRMMRMRRM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "1 1 S";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading SOUTH and turns in both directions", () => {
    const grid = "5 5";
    const startingPosition = "3 2 S";
    const directions = "MRMLMMMMLLMMRM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "3 2 E";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading EAST and only LEFT turns", () => {
    const grid = "5 5";
    const startingPosition = "5 5 E";
    const directions = "LMLMLMLMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "5 4 E";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading EAST and only RIGHT turns", () => {
    const grid = "5 5";
    const startingPosition = "3 3 E";
    const directions = "MMRMMRMMMMMRRM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "1 1 E";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading EAST and turns in both directions", () => {
    const grid = "5 5";
    const startingPosition = "0 0 E";
    const directions = "MRMMMLMLLMMRMMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "0 3 N";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading WEST and only LEFT turns", () => {
    const grid = "5 5";
    const startingPosition = "5 5 W";
    const directions = "LMLMLMLMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "3 5 W";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading WEST and only RIGHT turns", () => {
    const grid = "5 5";
    const startingPosition = "3 3 W";
    const directions = "MMRMMRMMMMMRRM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "4 5 W";
    expect(actual).to.equal(expected);
  });

  it("returns correct final position given currHeading WEST and turns in both directions", () => {
    const grid = "5 5";
    const startingPosition = "0 0 W";
    const directions = "MRMMMLMLLMMRMMM";
    const actual = moonRaker(grid, startingPosition, directions);
    const expected = "2 0 S";
    expect(actual).to.equal(expected);
  });
});
