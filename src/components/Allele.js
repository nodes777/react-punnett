import React from "react";
import { connect } from "react-redux";

function mapStateToProps({ parents }) {
	return {
		parents: parents
	};
}

export class Allele extends React.Component {
	// static propTypes = {
	// 	name: React.PropTypes.string
	// };

	render() {
		console.log(this.props);
		const { parents, parentId, alleleId } = this.props;
		return <span>{parents.byId[parentId][alleleId]}</span>;
	}
}

export default connect(mapStateToProps)(Allele);
