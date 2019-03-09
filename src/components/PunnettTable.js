import React, { Component } from "react";

class PunnettTable extends Component {
	render() {
		return (
			<div>
				<table>
					<tr>
						<td />
						<th scope="col">Parent 1 Allele 1</th>
						<th scope="col">Parent 1 Allele 2</th>
					</tr>
					<tr>
						<th>Parent 2 Allele 1</th>
						<td>$100</td>
						<td>$100</td>
					</tr>
					<tr>
						<th>Parent 2 Allele 2</th>
						<td>$80</td>
						<td>$100</td>
					</tr>
				</table>
			</div>
		);
	}
}
export default PunnettTable;
