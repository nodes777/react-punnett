import React, { Component } from "react";
import { colors } from "../utils/colors";
import ColorSquare from "./ColorSquare";

import "../css/listbox.css";

class ColorListbox extends Component {
	state = {
		currentAllele: undefined,
		openOptions: false
	};
	handleOpenOptions = event => {
		switch (event.type) {
			case "click":
				this.setState(() => ({
					openOptions: !this.state.openOptions
				}));
			case "keydown":
				if (event.key == "Enter" || event.key == " ") {
					this.setState(() => ({
						openOptions: !this.state.openOptions
					}));
				}
		}

		console.log(this.state);
	};
	render() {
		return (
			<div>
				<div
					tabIndex="0"
					role="select"
					onClick={this.handleOpenOptions}
					onKeyDown={this.handleOpenOptions}
				>
					{this.state.currentAllele === undefined
						? "Select an allele"
						: this.state.currentAllele}
				</div>
				<div>
					{this.state.openOptions === true ? (
						<div>options</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default ColorListbox;
