import React, { Component } from "react";
import logo from "./logo.svg";
import "./css/App.css";
import ColorSquare from "./components/ColorSquare";
import ColorListbox from "./components/ColorListbox";
import PunnettTable from "./components/PunnettTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ColorSquare color="Tomato" />
        <ColorListbox />
        <PunnettTable />
      </div>
    );
  }
}

export default App;
