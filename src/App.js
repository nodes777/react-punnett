import React, { Component } from "react";
import "./css/App.css";
// import ColorSquare from "./components/ColorSquare";
// import ColorListboxContainer from "./components/ColorListboxContainer";
import PunnettTable from "./components/PunnettTable";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PunnettTable />
			</div>
		);
	}
}

export default App;
