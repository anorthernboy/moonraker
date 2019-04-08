import React, { Component } from "react";
import { navigate } from "@reach/router";
import { createArray } from "../utils/utils.js";
import BuggySet from "../components/BuggySet.js";
import NextButton from "../components/NextButton.js";
import buggy from "../moon-buggy.png";
import rover from "../moon-rover.png";
import "../style/Buggy.css";

class Buggy extends Component {
  state = {
    grid: "",
    buggyPositionX: 0,
    buggyPositionY: 0,
    buggyHeading: "N",
    roverPositionX: 0,
    roverPositionY: 0,
    roverHeading: "N"
  };

  componentDidMount = () => {
    const { grid } = this.props.location.state;
    this.setState({
      grid
    });
  };

  render() {
    const { grid } = this.props.location.state;
    const gridWidth = createArray(grid.split(" ")[0]);
    const gridHeight = createArray(grid.split(" ")[1]);

    return (
      <div>
        <div className="outer-grid">
          <div className="mission-grid-size">
            <span>
              <img src={buggy} alt={`moon buggy`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <BuggySet
              craft={"buggy"}
              gridWidth={gridWidth}
              gridHeight={gridHeight}
              positionX={this.state.buggyPositionX}
              optionChangeX={this.handleBuggyOptionChangeX}
              positionY={this.state.buggyPositionY}
              optionChangeY={this.handleBuggyOptionChangeY}
              heading={this.state.buggyHeading}
              optionChangeHeading={this.handleBuggyOptionChangeHeading}
            />
          </div>
          <div className="mission-grid-size">
            <span>
              <img src={rover} alt={`moon rover`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <BuggySet
              craft={"rover"}
              gridWidth={gridWidth}
              gridHeight={gridHeight}
              positionX={this.state.roverPositionX}
              optionChangeX={this.handleRoverOptionChangeX}
              positionY={this.state.roverPositionY}
              optionChangeY={this.handleRoverOptionChangeY}
              heading={this.state.roverHeading}
              optionChangeHeading={this.handleRoverOptionChangeHeading}
            />
          </div>
        </div>
        <NextButton navigate={this.nextPage} text={"NEXT"} />
        <br />
        <br />
      </div>
    );
  }

  nextPage = () => {
    const {
      grid,
      buggyPositionX,
      buggyPositionY,
      buggyHeading,
      roverPositionX,
      roverPositionY,
      roverHeading
    } = this.state;
    navigate(`/directions`, {
      state: {
        grid,
        buggyPositionX,
        buggyPositionY,
        buggyHeading,
        roverPositionX,
        roverPositionY,
        roverHeading
      }
    });
  };

  handleBuggyOptionChangeX = changeEvent => {
    this.setState({
      buggyPositionX: changeEvent.target.value
    });
  };

  handleBuggyOptionChangeY = changeEvent => {
    this.setState({
      buggyPositionY: changeEvent.target.value
    });
  };

  handleBuggyOptionChangeHeading = changeEvent => {
    this.setState({
      buggyHeading: changeEvent.target.value
    });
  };

  handleRoverOptionChangeX = changeEvent => {
    this.setState({
      roverPositionX: changeEvent.target.value
    });
  };

  handleRoverOptionChangeY = changeEvent => {
    this.setState({
      roverPositionY: changeEvent.target.value
    });
  };

  handleRoverOptionChangeHeading = changeEvent => {
    this.setState({
      roverHeading: changeEvent.target.value
    });
  };
}

export default Buggy;
