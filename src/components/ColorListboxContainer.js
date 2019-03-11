import React, { Component } from "react";
import ColorListboxSelect from "./ColorListboxSelect";
import ColorListboxOptions from "./ColorListboxOptions";

import "../css/listbox.css";

class ColorListboxContainer extends Component {
	constructor(props) {
		super(props);
		// create a ref to store the DOM element
		this.selectRef = React.createRef();
		this.arrayOfOptionsRefs = [];
	}
	state = {
		currentAllele: undefined,
		openOptions: false,
		// arrayOfOptionsRefs: [],
		focusedOption: undefined
	};

	clearOptionsRefs = () => {
		this.arrayOfOptionsRefs = [];
		console.log(this.arrayOfOptionsRefs);
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
					this.clearOptionsRefs();
				}
				if (event.key === "ArrowUp") {
					event.preventDefault();
					this.arrayOfOptionsRefs[index - 1].focus();
					this.setState(() => ({
						focusedOption: color
					}));
				}
				if (event.key === "ArrowDown") {
					event.preventDefault();
					this.arrayOfOptionsRefs[index + 1].focus();
					this.setState(() => ({
						focusedOption: color
					}));
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

	setOptionRef = element => {
		// because refs are called when ColorListboxOptions is unmounted
		// don't add it if it's null
		if (element !== null) {
			this.arrayOfOptionsRefs.push(element);
		}
	};

	render() {
		let { currentAllele, openOptions, focusedOption } = this.state;
		const { parent } = this.props;
		return (
			<div>
				<ColorListboxSelect
					handleOpenOptions={this.handleOpenOptions}
					openOptions={this.state.openOptions}
					// Use the `ref` callback to store a reference to the text input DOM
					// element in an instance field
					selectRef={this.selectRef}
					currentAllele={currentAllele}
					parent={parent}
				/>
				<div>
					{openOptions === true ? (
						<ColorListboxOptions
							handleOptionsEvents={this.handleOptionsEvents}
							setOptionRef={this.setOptionRef}
							currentAllele={currentAllele}
							focusedOption={focusedOption}
						/>
					) : (
						[this.clearOptionsRefs(), null]
					)}
				</div>
			</div>
		);
	}
}

export default ColorListboxContainer;
