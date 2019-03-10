import React from "react";
import { colors } from "../utils/colors";

const ColorListboxOptions = props => {
	const { handleOptionsEvents, setOptionRef } = props;
	return (
		<div className="options-allele">
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
						onClick={e => handleOptionsEvents(color, index, e)}
						onKeyDown={e => handleOptionsEvents(color, index, e)}
						style={boxStyle}
						ref={setOptionRef}
					>
						{color} &#9632;
					</div>
				);
			})}
		</div>
	);
};

export default ColorListboxOptions;
