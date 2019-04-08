import React, { Component } from "react";
import "../style/NextButton.css";

class NextButton extends Component {
  render() {
    const { navigate, text } = this.props;
    return (
      <div className="next-button">
        <button onClick={navigate}>
          <p className="next-button-text">{text}</p>
        </button>
      </div>
    );
  }
}

export default NextButton;
