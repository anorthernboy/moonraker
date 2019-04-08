import React, { Component } from "react";
import { navigate } from "@reach/router";
import DirectionSet from "../components/DirectionSet.js";
import NextButton from "../components/NextButton.js";
import buggy from "../moon-buggy.png";
import rover from "../moon-rover.png";
import "../style/Direction.css";

class Direction extends Component {
  state = {
    grid: "",
    buggyPositionX: 0,
    buggyPositionY: 0,
    buggyHeading: "",
    buggyDirections: "",
    roverPositionX: 0,
    roverPositionY: 0,
    roverHeading: "",
    roverDirections: ""
  };

  componentDidMount = () => {
    const {
      grid,
      buggyPositionX,
      buggyPositionY,
      buggyHeading,
      roverPositionX,
      roverPositionY,
      roverHeading
    } = this.props.location.state;
    this.setState({
      grid,
      buggyPositionX,
      buggyPositionY,
      buggyHeading,
      roverPositionX,
      roverPositionY,
      roverHeading
    });
  };

  render() {
    const { buggyDirections, roverDirections } = this.state;
    return (
      <div>
        <div className="outer-grid">
          <div className="mission-grid-size">
            <span>
              <img src={buggy} alt={`moon buggy`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <DirectionSet
              craft={"buggy"}
              rotateLeft={this.rotateBuggyLeft}
              moveCraft={this.moveBuggy}
              rotateRight={this.rotateBuggyRight}
              directions={buggyDirections}
            />
          </div>
          <div className="mission-grid-size">
            <span>
              <img src={rover} alt={`moon rover`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <DirectionSet
              craft={"rover"}
              rotateLeft={this.rotateRoverLeft}
              moveCraft={this.moveRover}
              rotateRight={this.rotateRoverRight}
              directions={roverDirections}
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
      buggyDirections,
      roverPositionX,
      roverPositionY,
      roverHeading,
      roverDirections
    } = this.state;

    const buggyStartingPosition = `${buggyPositionX} ${buggyPositionY} ${buggyHeading}`;
    const roverStartingPosition = `${roverPositionX} ${roverPositionY} ${roverHeading}`;

    navigate(`/mission`, {
      state: {
        grid,
        buggyStartingPosition,
        buggyDirections,
        roverStartingPosition,
        roverDirections
      }
    });
  };

  rotateBuggyLeft = () => {
    this.setState({
      buggyDirections: this.state.buggyDirections + "L"
    });
  };

  rotateBuggyRight = () => {
    this.setState({
      buggyDirections: this.state.buggyDirections + "R"
    });
  };

  moveBuggy = () => {
    this.setState({
      buggyDirections: this.state.buggyDirections + "M"
    });
  };

  rotateRoverLeft = () => {
    this.setState({
      roverDirections: this.state.roverDirections + "L"
    });
  };

  rotateRoverRight = () => {
    this.setState({
      roverDirections: this.state.roverDirections + "R"
    });
  };

  moveRover = () => {
    this.setState({
      roverDirections: this.state.roverDirections + "M"
    });
  };
}

export default Direction;
