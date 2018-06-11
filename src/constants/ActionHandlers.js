import * as type from './ActionTypes';

export const actionHandlers = {
	[type.ADD_TODO] : (state, action) => ((state.todo)?
		{todo:[...state.todo, action.text]}:
		{todo: [action.text]}
	)
}