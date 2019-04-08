import React, { Component } from "react";
import { navigate } from "@reach/router";
import GridSet from "../components/GridSet";
import NextButton from "../components/NextButton.js";
import height from "../height.png";
import width from "../width.png";
import "../style/Grid.css";

class Grid extends Component {
  state = { selectedOptionX: 0, selectedOptionY: 0 };
  render() {
    return (
      <div>
        <div className="outer-grid">
          <div className="mission-grid-size">
            <span>
              <img src={width} alt={`set width`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <GridSet
              direction={"width"}
              selectedOption={this.state.selectedOptionX}
              handleOptionChange={this.handleOptionChangeX}
            />
          </div>
          <div className="mission-grid-size">
            <span>
              <img src={height} alt={`set height`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <GridSet
              direction={"height"}
              selectedOption={this.state.selectedOptionY}
              handleOptionChange={this.handleOptionChangeY}
            />
          </div>
          <NextButton navigate={this.nextPage} text={"NEXT"} />
          <br />
          <br />
        </div>
      </div>
    );
  }

  nextPage = () => {
    const { selectedOptionX, selectedOptionY } = this.state;
    const grid = `${selectedOptionX} ${selectedOptionY}`;
    navigate(`/buggy`, {
      state: { grid }
    });
  };

  handleOptionChangeX = changeEvent => {
    this.setState({
      selectedOptionX: changeEvent.target.value
    });
  };

  handleOptionChangeY = changeEvent => {
    this.setState({
      selectedOptionY: changeEvent.target.value
    });
  };
}

export default Grid;
