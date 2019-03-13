export const CHANGE_PARENT_ALLELE = "CHANGE_PARENT_ALLELE";

export const changeParentAllele = data => {
	return {
		type: CHANGE_PARENT_ALLELE,
		data
	};
};
