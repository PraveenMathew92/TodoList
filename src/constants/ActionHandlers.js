import * as type from './ActionTypes';

export const actionHandlers = {
	[type.ADD_TODO] : (state, action) => ({todo: [action.text]})
}