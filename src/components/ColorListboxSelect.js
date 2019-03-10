import React from "react";

const ColorListboxSelect = props => {
	const {
		handleOpenOptions,
		openOptions,
		selectStyle,
		currentAllele,
		selectRef
	} = props;
	return (
		<div
			tabIndex="0"
			role="select"
			onClick={handleOpenOptions}
			onKeyDown={handleOpenOptions}
			aria-pressed={openOptions}
			aria-expanded={openOptions}
			className="select-allele"
			style={selectStyle}
			// Use the `ref` callback to store a reference to the text input DOM
			// element in an instance field
			ref={selectRef}
		>
			{currentAllele === undefined ? (
				"Select an Allele"
			) : (
				<span>{currentAllele} &#9632;</span>
			)}
		</div>
	);
};

export default ColorListboxSelect;
