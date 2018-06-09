import * as type from './../constants/ActionTypes';

export const addTodo = (text) => ({
	type: type.ADD_TODO,
	text
});