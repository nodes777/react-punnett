import React, { Component } from "react";
import Diploid from "./Diploid";
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
							Flower 1
						</th>
					</tr>
					<tr>
						<th scope="col">
							<ColorListboxContainer
								flowerId="flower1"
								alleleType="color"
								allelePosition={0}
							/>
						</th>
						<th scope="col">
							<ColorListboxContainer
								flowerId="flower1"
								alleleType="color"
								allelePosition={1}
							/>
						</th>
					</tr>
					<tr>
						<th
							rowSpan="2"
							scope="rowgroup"
							className="table-header"
						>
							Flower 2
						</th>
						<th scope="row">
							<ColorListboxContainer
								flowerId="flower2"
								alleleType="color"
								allelePosition={0}
							/>
						</th>
						<td>
							<Diploid
								p1Id="flower1"
								p2Id="flower2"
								a1Id="allele1"
								a2Id="allele1"
							/>
						</td>
						<td>
							<Diploid
								p1Id="flower1"
								p2Id="flower2"
								a1Id="allele2"
								a2Id="allele1"
							/>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<ColorListboxContainer
								flowerId="flower2"
								alleleId="allele2"
							/>
						</th>
						<td>
							<Diploid
								p1Id="flower1"
								p2Id="flower2"
								a1Id="allele1"
								a2Id="allele2"
							/>
						</td>
						<td>
							<Diploid
								p1Id="flower1"
								p2Id="flower2"
								a1Id="allele2"
								a2Id="allele2"
							/>
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
export default PunnettTable;
