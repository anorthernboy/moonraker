import React from "react";
import SetPosition from "../components/SetPosition.js";
import SetDirection from "../components/SetPosition.js";
import move from "../move.png";
import moveright from "../move-right.png";
import movedown from "../move-down.png";
import moveleft from "../move-left.png";

const BuggySet = ({
  craft,
  gridWidth,
  gridHeight,
  positionX,
  optionChangeX,
  positionY,
  optionChangeY,
  heading,
  optionChangeHeading
}) => {
  return (
    <div className="buggy-grid-size">
      <h4>{`MOON ${craft.toUpperCase()}`}</h4>
      <h2>Set the x-coordinate for the starting position</h2>
      <div className="buggy-grid-selector">
        {gridWidth.map((curr, index) => (
          <SetPosition
            key={index}
            num={curr}
            selectedOption={positionX}
            optionChange={optionChangeX}
          />
        ))}
      </div>
      <br />

      <h2>Set the y-coordinate for the starting position</h2>
      <div className="buggy-grid-selector">
        {gridHeight.map((curr, index) => (
          <SetPosition
            key={index}
            num={curr}
            selectedOption={positionY}
            optionChange={optionChangeY}
          />
        ))}
      </div>
      <br />

      <h2>Set the heading for the starting position</h2>
      <br />

      <span className="arrow-selector">
        <img src={move} alt="north" width="25px" height="25px" />
        <img src={moveright} alt="east" width="25px" height="25px" />
        <img src={movedown} alt="south" width="25px" height="25px" />
        <img src={moveleft} alt="west" width="25px" height="25px" />
      </span>

      <div className="direction-selector">
        {["N", "E", "S", "W"].map((curr, index) => (
          <SetDirection
            key={index}
            num={curr}
            selectedOption={heading}
            optionChange={optionChangeHeading}
          />
        ))}
      </div>
    </div>
  );
};

export default BuggySet;
