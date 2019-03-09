import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/App.css";
import ColorSquare from "./components/ColorSquare";
import ColorListbox from "./components/ColorListbox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSquare color="Tomato" />
        <ColorListbox />
      </div>
    );
  }
}

export default App;
