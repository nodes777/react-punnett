import React from "react";

const ColorListboxSelect = props => {
	const {
		handleOpenOptions,
		openOptions,
		currentAllele,
		selectRef,
		parent
	} = props;
	return (
		<div
			tabIndex="0"
			role="button"
			onClick={handleOpenOptions}
			onKeyDown={handleOpenOptions}
			aria-pressed={openOptions}
			aria-expanded={openOptions}
			className="select-allele"
			// Use the `ref` callback to store a reference to the text input DOM
			// element in an instance field
			ref={selectRef}
		>
			{currentAllele === undefined ? (
				"Select an Allele"
			) : (
				<span>
					<span>Parent </span>
					<span>{parent} </span>
					<span>Allele </span>
					<span>{currentAllele}</span>{" "}
					<span style={{ color: currentAllele }}>&#9632;</span>
				</span>
			)}
		</div>
	);
};

export default ColorListboxSelect;
