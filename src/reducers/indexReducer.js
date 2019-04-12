import { CHANGE_PARENT_ALLELE } from "../actions/parents";
import { combineReducers } from "redux";
import exampleState from "../exampleState";

export function parents(state = exampleState, action) {
	switch (action.type) {
		case CHANGE_PARENT_ALLELE:
			const {
				flowerId,
				alleleType,
				allelePosition,
				allele
			} = action.data;
			console.log(action.data);
			console.log(state.byId[flowerId].genotype.color);
			return {
				...state,
				byId: {
					...state.byId,
					[flowerId]: {
						...state.byId[flowerId],
						genotype: {
							...state.byId[flowerId].genotype,
							[alleleType]: state.byId[flowerId].genotype[
								alleleType
							].map((item, index) => {
								if (index === allelePosition) {
									return allele;
								} else {
									return item;
								}
							})
						}
					}
				}
			};

		default:
			return state;
	}
}

const indexReducer = combineReducers({
	parents
});

export default indexReducer;
