import * as type from './../constants/ActionTypes';

export const updateStar = (index, star) => ({
	type: type.UPDATE_STAR,
	index: index,
	star: star
});