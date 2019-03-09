import React, { Component } from "react";
import { colors } from "../utils/colors";
import ColorSquare from "./ColorSquare";

import "../css/listbox.css";

class ColorListbox extends Component {
	render() {
		return (
			<div className="color-listbox">
				{Object.keys(colors).map(color => {
					return (
						<div>
							{color} <ColorSquare color={color} />
						</div>
					);
				})}
			</div>
		);
	}
}

export default ColorListbox;
