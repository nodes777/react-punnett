import React, { Component } from "react";
import { colors } from "../utils/colors";
import ColorListboxSelect from "./ColorListboxSelect";
import ColorListboxOptions from "./ColorListboxOptions";

import "../css/listbox.css";

class ColorListboxContainer extends Component {
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
				if (event.key === "Escape") {
					this.setState(
						() => {
							return { openOptions: !this.state.openOptions };
						},
						() => {
							this.selectRef.current.focus();
						}
					);
				}
		}
	};

	render() {
		let { currentAllele, openOptions } = this.state;
		const selectStyle = {
			color: currentAllele
		};
		return (
			<div>
				<ColorListboxSelect
					handleOpenOptions={this.handleOpenOptions}
					openOptions={this.state.openOptions}
					selectStyle={selectStyle}
					// Use the `ref` callback to store a reference to the text input DOM
					// element in an instance field
					selectRef={this.selectRef}
					currentAllele={currentAllele}
				/>
				<div>
					{openOptions === true ? (
						<ColorListboxOptions
							handleOptionsEvents={this.handleOptionsEvents}
							setOptionRef={this.setOptionRef}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default ColorListboxContainer;
