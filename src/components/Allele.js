import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ColorSquare from "./ColorSquare";

export class Allele extends React.Component {
	static propTypes = {
		parentId: PropTypes.string,
		alleleId: PropTypes.string
	};

	render() {
		const { parents, parentId, alleleId, allelePosition } = this.props;
		const colorName = parents.byId[parentId].genotype.color[allelePosition];
		return (
			<Fragment>
				<span>{colorName} </span>
				<ColorSquare color={colorName} />
			</Fragment>
		);
	}
}

function mapStateToProps({ parents }) {
	return {
		parents: parents
	};
}

export default connect(mapStateToProps)(Allele);
