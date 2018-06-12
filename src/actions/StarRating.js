import * as type from './../constants/ActionTypes';

export const updateStar = (id, star) => ({
	type: type.UPDATE_STAR,
	id: id,
	star: star
});