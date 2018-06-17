import * as type from './ActionTypes';

const addTodo = (state, action) => ((state.todo)?
	{todo:[...state.todo, {text: action.text, star: 0}]}:
	{todo: [{text: action.text, star: 0}]}
);

const updateStar = (state, action) => {
		const updatedTodo = {text: state.todo[action.index].text, star: action.star};
		return {
		todo: [...state.todo.slice(0, action.index), 
				updatedTodo, 
				...state.todo.slice(action.index + 1)]
	}
}

export const actionHandlers = {
	[type.ADD_TODO] : addTodo,
	[type.UPDATE_STAR] : updateStar
}