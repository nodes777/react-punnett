import React, { Component } from "react";
import "./css/App.css";
import PunnettTable from "./components/PunnettTable";
import Game from "./phaser/GameContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PunnettTable />
				<Game />
			</div>
		);
	}
}

export default App;
