import React, { Component } from "react";
import Allele from "./Allele";
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
							Parent 1
						</th>
					</tr>
					<tr>
						<th scope="col">
							<ColorListboxContainer
								parentId="parent1"
								alleleId="allele1"
							/>
						</th>
						<th scope="col">
							<ColorListboxContainer
								parentId="parent1"
								alleleId="allele2"
							/>
						</th>
					</tr>
					<tr>
						<th
							rowSpan="2"
							scope="rowgroup"
							className="table-header"
						>
							Parent 2
						</th>
						<th scope="row">
							<ColorListboxContainer
								parentId="parent2"
								alleleId="allele1"
							/>
						</th>
						<td>
							<Diploid
								p1Id="parent1"
								p2Id="parent2"
								a1Id="allele1"
								a2Id="allele1"
							/>
						</td>
						<td>
							<Allele parentId="parent1" alleleId="allele2" />
							<Allele parentId="parent2" alleleId="allele1" />
						</td>
					</tr>
					<tr>
						<th scope="row">
							<ColorListboxContainer
								parentId="parent2"
								alleleId="allele2"
							/>
						</th>
						<td>
							<Allele parentId="parent1" alleleId="allele1" />
							<Allele parentId="parent2" alleleId="allele2" />
						</td>
						<td>
							<Allele parentId="parent1" alleleId="allele2" />
							<Allele parentId="parent2" alleleId="allele2" />
						</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
export default PunnettTable;
