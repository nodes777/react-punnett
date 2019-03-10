import React, { Component } from "react";
import { colors } from "../utils/colors";
//import ColorSquare from "./ColorSquare";

import "../css/listbox.css";

class ColorListbox extends Component {
	constructor(props) {
		super(props);
		// create a ref to store the DOM element
		this.selectRef = React.createRef();
		this.arrayOfOptionsRefs = [];
		this.setOptionRef = element => {
			this.arrayOfOptionsRefs.push(element);
		};
	}
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
				break;
			case "keydown":
				if (event.key === "Enter" || event.key === " ") {
					this.setState(
						() => {
							return { openOptions: !this.state.openOptions };
						},
						() => {
							this.arrayOfOptionsRefs[0].focus();
						}
					);
				}
		}
	};
	handleOptionsEvents = (color, index, event) => {
		console.log(this);
		switch (event.type) {
			case "click":
				this.setState(() => ({
					currentAllele: color,
					openOptions: !this.state.openOptions
				}));
				this.selectRef.current.focus();
				break;
			case "keydown":
				if (event.key === "Enter" || event.key === " ") {
					this.setState(() => ({
						currentAllele: color,
						openOptions: !this.state.openOptions
					}));
					this.selectRef.current.focus();
				}
				if (event.key === "ArrowUp") {
					event.preventDefault();
					this.arrayOfOptionsRefs[index - 1].focus();
				}
				if (event.key === "ArrowDown") {
					event.preventDefault();
					this.arrayOfOptionsRefs[index + 1].focus();
				}
		}
	};

	render() {
		let { currentAllele, openOptions } = this.state;
		const optionsStyle = {
			backgroundColor: "#282c34",
			position: "fixed",
			zIndex: 2,
			overflowY: "auto",
			width: "220px",
			height: "400px",
			border: "2px solid black",
			borderRadius: "2px"
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
					// Use the `ref` callback to store a reference to the text input DOM
					// element in an instance field
					ref={this.selectRef}
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
							{Object.keys(colors).map((color, index) => {
								const boxStyle = {
									fontSize: "20px",
									color: color
								};
								return (
									<div
										tabIndex="0"
										role="option"
										key={color}
										onClick={e =>
											this.handleOptionsEvents(
												color,
												index,
												e
											)
										}
										onKeyDown={e =>
											this.handleOptionsEvents(
												color,
												index,
												e
											)
										}
										style={boxStyle}
										ref={this.setOptionRef}
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
