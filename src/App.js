import React, { Component } from "react";
import "./css/App.css";
import PunnettTable from "./components/PunnettTable";
import Game from "./phaser/GameContainer";
import NewFlowerButton from "./components/NewFlowerButton";

class App extends Component {
	render() {
		return (
			<div className="App">
				<PunnettTable />
				<NewFlowerButton />
				<Game />
			</div>
		);
	}
}

export default App;
