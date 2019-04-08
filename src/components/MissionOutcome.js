import React from "react";
import { moonRaker } from "../utils/moonraker.js";

const MissionOutcome = ({ craft, grid, startingPosition, directions }) => {
  return (
    <div className="mission-grid-size">
      <h4>{`MOON ${craft.toUpperCase()}`}</h4>
      <h2>Mission started at:</h2>
      <br />
      <div className="mission-coordinates">
        <h2>X: </h2>
        <h2>{`${startingPosition.split(" ")[0]}  //  `}</h2>
        <h2>Y: </h2>
        <h2>{`${startingPosition.split(" ")[1]}  //  `}</h2>
        <h2>H: </h2>
        <h2>{startingPosition.split(" ")[2]}</h2>
      </div>
      <br />

      <h2>Mission ended at:</h2>
      <br />

      <div className="mission-coordinates">
        <h2>X: </h2>
        <h2>{`${
          moonRaker(grid, startingPosition, directions).split(" ")[0]
        }  //  `}</h2>
        <h2>Y: </h2>
        <h2>{`${
          moonRaker(grid, startingPosition, directions).split(" ")[1]
        }  //  `}</h2>
        <h2>H: </h2>
        <h2>{moonRaker(grid, startingPosition, directions).split(" ")[2]}</h2>
      </div>
    </div>
  );
};

export default MissionOutcome;
