import React, { Component } from "react";
import ColorListboxSelect from "./ColorListboxSelect";
import ColorListboxOptions from "./ColorListboxOptions";

import "../css/listbox.css";

class ColorListboxContainer extends Component {
	constructor(props) {
		super(props);
		// create a ref to store the DOM element
		this.selectRef = React.createRef();
	}
	state = {
		currentAllele: undefined,
		openOptions: false,
		arrayOfOptionsRefs: [],
		focusedOption: undefined
	};
	addOptionRef = element => {
		this.setState(() => ({
			arrayOfOptionsRefs: [...this.state.arrayOfOptionsRefs, element]
		}));
		console.log(this.state.arrayOfOptionsRefs);
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

	render() {
		let { currentAllele, openOptions, focusedOption } = this.state;
		const { parent } = this.props;
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
					parent={parent}
				/>
				<div>
					{openOptions === true ? (
						<ColorListboxOptions
							handleOptionsEvents={this.handleOptionsEvents}
							addOptionRef={this.addOptionRef}
							currentAllele={currentAllele}
							focusedOption={focusedOption}
						/>
					) : null}
				</div>
			</div>
		);
	}
}

export default ColorListboxContainer;
