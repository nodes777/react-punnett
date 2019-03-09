import React, { Component } from "react";
import { colors } from "../utils/colors";
import ColorSquare from "./ColorSquare";

import "../css/listbox.css";

class ColorListbox extends Component {
	render() {
		return (
			<div className="color-listbox">
				<select>
					{Object.keys(colors).map(color => {
						const boxStyle = { fontSize: "30px", color: color };
						return (
							<option style={boxStyle}>{color} &#9632;</option>
						);
					})}
				</select>
			</div>
		);
	}
}

export default ColorListbox;
