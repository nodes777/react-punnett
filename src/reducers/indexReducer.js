import { CHANGE_PARENT_ALLELE } from "../actions/parents";
import { combineReducers } from "redux";
import exampleState from "../exampleState";

export function parents(state = exampleState, action) {
	switch (action.type) {
		case CHANGE_PARENT_ALLELE:
			const { parentId, alleleId, allele } = action.data;
			return {
				...state,
				byId: {
					...state.byId,
					[parentId]: {
						...state.byId[parentId],
						[alleleId]: allele
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
