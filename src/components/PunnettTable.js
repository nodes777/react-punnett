import React, { Component } from "react";
import Allele from "./Allele";

class PunnettTable extends Component {
	render() {
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td />
							<th scope="col">Parent 1 Allele 1</th>
							<th scope="col">Parent 1 Allele 2</th>
						</tr>
						<tr>
							<th scope="row">Parent 2 Allele 1</th>
							<td>
								<Allele allele="P1A1" />
								<Allele allele="P2A1" />
							</td>
							<td>
								<Allele allele="P1A2" />
								<Allele allele="P2A1" />
							</td>
						</tr>
						<tr>
							<th scope="row">Parent 2 Allele 2</th>
							<td>
								<Allele allele="P1A1" />
								<Allele allele="P2A2" />
							</td>
							<td>
								<Allele allele="P1A2" />
								<Allele allele="P2A2" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
export default PunnettTable;
