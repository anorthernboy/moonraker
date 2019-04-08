import React from "react";
import SetGridButton from "./SetGridButton.js";

const GridSet = ({ direction, selectedOption, handleOptionChange }) => {
  const gridSize = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="set-grid-size">
      <h4>{`SCAN AREA ${direction.toUpperCase()}`}</h4>
      <h2>{`Set the ${direction} of the moon surface area to scan`}</h2>
      <br />
      <div className="grid-selector">
        {gridSize.map((curr, index) => (
          <SetGridButton
            key={index}
            num={curr}
            selectedOption={selectedOption}
            optionChange={handleOptionChange}
          />
        ))}
      </div>
      <br />
    </div>
  );
};

export default GridSet;
