import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Allele from "./Allele";

export class Diploid extends React.Component {
	static propTypes = {};
	render() {
		const { p1Id, p2Id, a1Id, a2Id } = this.props;
		const { parents } = this.props;
		const leftColorName = parents.byId[p1Id][a1Id];
		const rightColorName = parents.byId[p2Id][a2Id];
		// const bgStyle = {
		// 	backgroundImage: `linear-gradient(to right, ${leftColorName} , ${rightColorName})`
		// };
		return (
			<span>
				<Allele parentId={p1Id} alleleId={a1Id} />
				<Allele parentId={p2Id} alleleId={a2Id} />
			</span>
		);
	}
}

function mapStateToProps({ parents }) {
	return {
		parents: parents
	};
}
export default connect(
	mapStateToProps
	// Implement map dispatch to props
)(Diploid);
