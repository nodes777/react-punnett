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
	};
	handleSelectAllele = (color, event) => {
		switch (event.type) {
			case "click":
				this.setState(() => ({
					currentAllele: color,
					openOptions: !this.state.openOptions
				}));
			case "keydown":
				if (event.key == "Enter" || event.key == " ") {
					this.setState(() => ({
						currentAllele: color,
						openOptions: !this.state.openOptions
					}));
				}
		}
	};

	render() {
		let { currentAllele, openOptions } = this.state;
		const optionsStyle = {
			backgroundColor: "gray",
			position: "fixed",
			zIndex: 2,
			overflowY: "auto",
			width: "200px",
			height: "500px"
		};
		const selectStyle = {
			border: "2px solid black",
			borderRadius: "2px",
			padding: "5px",
			color: currentAllele
		};
		return (
			<div>
				<div
					tabIndex="0"
					role="select"
					onClick={this.handleOpenOptions}
					onKeyDown={this.handleOpenOptions}
					aria-pressed={this.state.openOptions}
					aria-expanded={this.state.openOptions}
					style={selectStyle}
				>
					{currentAllele === undefined ? (
						"Select an Allele"
					) : (
						<span>{currentAllele} &#9632;</span>
					)}
				</div>
				<div>
					{openOptions === true ? (
						<div style={optionsStyle}>
							{Object.keys(colors).map(color => {
								const boxStyle = {
									fontSize: "20px",
									color: color
								};
								return (
									<div
										key={color}
										onClick={e =>
											this.handleSelectAllele(color, e)
										}
										style={boxStyle}
									>
										{color} &#9632;
									</div>
								);
							})}
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default ColorListbox;
