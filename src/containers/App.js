import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "../components/Header.js";
import Home from "../views/Home.js";
import Grid from "../views/Grid.js";
import Buggy from "../views/Buggy.js";
import Direction from "../views/Direction.js";
import Mission from "../views/Mission.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Home path="/" />
          <Grid path="/grid" />
          <Buggy path="/buggy" />
          <Direction path="/directions" />
          <Mission path="/mission" />
        </Router>
      </div>
    );
  }
}

export default App;
