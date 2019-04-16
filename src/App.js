import React, { Component } from "react";
import "./css/App.css";
import PunnettTable from "./components/PunnettTable";
import NewFlowerButton from "./components/NewFlowerButton";
import ColorListboxContainer from "./components/ColorListboxContainer";
class App extends Component {
	render() {
		return (
			<div className="App">
				<PunnettTable />
				<NewFlowerButton />

				<ColorListboxContainer
					flowerId="flower1"
					alleleType="color"
					allelePosition={0}
				/>
			</div>
		);
	}
}

export default App;
