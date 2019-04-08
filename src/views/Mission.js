import React, { Component } from "react";
import { Link } from "@reach/router";
import MissionOutcome from "../components/MissionOutcome.js";
import NextButton from "../components/NextButton.js";
import buggy from "../moon-buggy.png";
import rover from "../moon-rover.png";
import "../style/Mission.css";

class Mission extends Component {
  state = {
    grid: "",
    buggyStartingPosition: "",
    buggyDirections: "",
    roverStartingPosition: "",
    roverDirections: ""
  };

  componentDidMount = () => {
    const {
      grid,
      buggyStartingPosition,
      buggyDirections,
      roverStartingPosition,
      roverDirections
    } = this.props.location.state;
    this.setState({
      grid,
      buggyStartingPosition,
      buggyDirections,
      roverStartingPosition,
      roverDirections
    });
  };

  render() {
    const {
      grid,
      buggyStartingPosition,
      buggyDirections,
      roverStartingPosition,
      roverDirections
    } = this.state;

    return (
      <div>
        <div className="outer-grid">
          <div className="mission-grid-size">
            <span>
              <img src={buggy} alt={`moon buggy`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <MissionOutcome
              craft={"buggy"}
              grid={grid}
              startingPosition={buggyStartingPosition}
              directions={buggyDirections}
            />
          </div>
          <div className="mission-grid-size">
            <span>
              <img src={rover} alt={`moon rover`} width="80px" height="80px" />
            </span>
            <br />
            <br />
            <MissionOutcome
              craft={"rover"}
              grid={grid}
              startingPosition={roverStartingPosition}
              directions={roverDirections}
            />
          </div>
        </div>
        <Link to={`/`}>
          <NextButton text={"RETRY"} />
        </Link>
        <br />
        <br />
      </div>
    );
  }
}

export default Mission;
