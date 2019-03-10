import React, { Component } from "react";
import Allele from "./Allele";
import ColorListboxContainer from "./ColorListboxContainer";
import "../css/table.css";

class PunnettTable extends Component {
	render() {
		return (
			<table>
				<tbody>
					<tr>
						<td rowSpan="2" colSpan="2" />
						<th
							colSpan="2"
							scope="colgroup"
							className="table-header"
						>
							Parent 1
						</th>
					</tr>
					<tr>
						<th scope="col">Parent 1 Allele 1</th>
						<th scope="col">Parent 1 Allele 2</th>
					</tr>
					<tr>
						<th
							rowSpan="2"
							scope="rowgroup"
							className="table-header"
						>
							Parent 2
						</th>
						<th scope="row">Parent 2 Allele 1</th>
						<td>Allele</td>
						<td>Allele</td>
					</tr>
					<tr>
						<th scope="row">Parent 2 Allele 2</th>
						<td>Allele</td>
						<td>Allele</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
export default PunnettTable;
