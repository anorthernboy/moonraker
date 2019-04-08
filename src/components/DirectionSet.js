import React from "react";
import rotateleft from "../rotate-left.png";
import rotateright from "../rotate-right.png";
import move from "../move.png";

const DirectionSet = ({
  craft,
  rotateLeft,
  moveCraft,
  rotateRight,
  directions
}) => {
  return (
    <div className="direction-grid-size">
      <h4>{`MOON ${craft.toUpperCase()}`}</h4>
      <h2>Set the directions for the mission route</h2>
      <br />

      <span className="arrow-selector">
        <img
          src={rotateleft}
          alt="rotate left"
          width="25px"
          height="25px"
          className="direction-button"
          onClick={rotateLeft}
        />
        <img
          src={move}
          alt="move"
          width="25px"
          height="25px"
          className="direction-button"
          onClick={moveCraft}
        />
        <img
          src={rotateright}
          alt="rotate right"
          width="25px"
          height="25px"
          className="direction-button"
          onClick={rotateRight}
        />
      </span>
      <br />

      {
        <span className="direction-display">
          <h3>{"["}</h3>
          <h3>{directions.split("").join(" > ")}</h3>
          <h3>{"]"}</h3>
        </span>
      }
    </div>
  );
};

export default DirectionSet;
