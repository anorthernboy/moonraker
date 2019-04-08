const handleTurn = (currHeading, rotateDirection) => {
  // if rotating left shift directions one position to the right
  // pull off the last character and add it to the start of the string
  if (rotateDirection === "L") {
    return (
      // split into array and slice length minus 1 to get the last character
      currHeading.split("").slice(currHeading.length - 1) +
      // split into array and slice from beginning, stopping at and not including last letter at length minus 1 - add this to the right of the last character
      currHeading
        .split("")
        .slice(0, currHeading.length - 1)
        .join("")
    );
  }
  // if rotating right shift directions one position to the left
  // pull off the first character and add it to the end of the string
  if (rotateDirection === "R") {
    return (
      // split into array and slice everything from index 1 to end of array
      currHeading
        .split("")
        .slice(1)
        .join("") +
      // split into array and slice from beginning up to but not including item at index 1 (first character only) - add this to the right of the first slice
      currHeading.split("").slice(0, 1)
    );
  }
};

const handleMove = (grid, currPosition, currHeading) => {
  // if direction is N and current position is not at top of grid, move one space up
  if (currHeading[0] === "N" && currPosition.y < grid.y) {
    currPosition.y++;
    return currPosition;
  }
  // if direction is S and current position is not at bottom of grid, move one space down
  else if (currHeading[0] === "S" && currPosition.y >= 1) {
    currPosition.y--;
    return currPosition;
  }
  // if direction is E and current position is not at far right of grid, move one space right
  else if (currHeading[0] === "E" && currPosition.x < grid.x) {
    currPosition.x++;
    return currPosition;
  }
  // if direction is W and current position is not at far left of grid, move one space left
  else if (currHeading[0] === "W" && currPosition.x >= 1) {
    currPosition.x--;
    return currPosition;
  }
  // otherwise return the current position unchanged
  else {
    return currPosition;
  }
};

const moonRaker = (grid, startingPosition, directions) => {
  // create upper right grid coordinate object by splitting grid input at " ", taking the first value as x and second value as y
  const gridSize = {
    x: +grid.split(" ")[0],
    y: +grid.split(" ")[1]
  };

  // create buggy starting startingPosition coordinate object by splitting startingPosition input at " ", taking the first value as x and second value as y
  const currCoord = {
    x: +startingPosition.split(" ")[0],
    y: +startingPosition.split(" ")[1]
  };

  // if buggy position is outside of grid return error message
  if (currCoord.x > gridSize.x || currCoord.y > gridSize.y) {
    return "Moonraker is off grid!!";
  }

  // create heading/direction reference by splitting startingPosition input at " ", taking the third value (after the coordinates)
  let currHeading = "";

  // set direction as string containing all directions so startingPosition can be rotated - current heading will always be at [0]
  if (startingPosition.split(" ")[2] === "N") {
    currHeading = "NESW";
  } else if (startingPosition.split(" ")[2] === "S") {
    currHeading = "SWNE";
  } else if (startingPosition.split(" ")[2] === "E") {
    currHeading = "ESWN";
  } else if (startingPosition.split(" ")[2] === "W") {
    currHeading = "WNES";
  }

  // create an array of directions
  const directionsArr = directions.split("");

  // set starting position and heading/direction
  let position = currCoord;
  let heading = currHeading;

  // loop the directions, calling handleMove or handleTurn as required
  for (let i = 0; i < directionsArr.length; i++) {
    if (directionsArr[i] === "L" || directionsArr[i] === "R") {
      heading = handleTurn(heading, directionsArr[i]);
    }

    if (directionsArr[i] === "M") {
      position = handleMove(gridSize, position, heading);
    }
  }

  const finalPosition =
    position.x.toString() + " " + position.y.toString() + " " + heading[0];

  return finalPosition;
};

module.exports = { handleTurn, handleMove, moonRaker };
