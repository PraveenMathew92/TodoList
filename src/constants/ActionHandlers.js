import * as type from './ActionTypes';

export const actionHandlers = {
	[type.ADD_TODO] : (state, action) => ((state.todo)?
		{todo:[...state.todo, {text: action.text, star: 0}]}:
		{todo: [{text: action.text, star: 0}]}
	)
}