import React, { Component } from "react";
import "../style/SetGridButton.css";

class SetGridButton extends Component {
  render() {
    const { num, selectedOption, optionChange } = this.props;
    return (
      <div className="set-button">
        <label>
          <input
            type="radio"
            value={num}
            checked={selectedOption >= num}
            onClick={optionChange}
          />
        </label>
      </div>
    );
  }
}

export default SetGridButton;
