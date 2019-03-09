import React, { Component } from "react";
import { colors } from "../utils/colors";
import ColorSquare from "./ColorSquare";

import "../css/listbox.css";

import Dropdown from "react-accessible-dropdown";
class ColorListbox extends Component {
	render() {
		return (
			<div>
				<Dropdown
					options={Object.keys(colors).map(color => {
						return (
							<div>
								{color} <ColorSquare color={color} />
							</div>
						);
					})}
					onChange={this._onSelect}
					placeholder="Select an option"
				/>
			</div>
		);
	}
}

export default ColorListbox;
