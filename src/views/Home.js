import React from "react";
import { Link } from "@reach/router";
import NextButton from "../components/NextButton.js";

const Home = () => {
  return (
    <div className="outer-grid">
      <h4>SPACE ODDITY</h4>
      <h2>This is ground control to Major Tom,</h2>
      <h2>commencing countdown, engines on...</h2>
      <br />
      <h2>
        Your mission is to scan the surface of the moon for signs of life:
      </h2>
      <h2>1. Set area to scan</h2>
      <h2>2. Choose starting point</h2>
      <h2>3. Plot mission route</h2>
      <br />
      <br />
      <Link to={`/grid`}>
        <NextButton text={"START"} />
      </Link>
      <br />
      <br />
    </div>
  );
};

export default Home;
