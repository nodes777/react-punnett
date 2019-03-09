import React from "react";

const ColorSquare = props => {
	const { color } = props;
	console.log(color);
	const boxStyle = { fontSize: "30px", color: color };
	return <span style={boxStyle}>&#9632;</span>;
};

export default ColorSquare;
