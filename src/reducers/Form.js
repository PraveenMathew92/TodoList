import { actionHandlers } from './../constants/ActionHandlers';

export const createReducer = (initialState = {}, handlers = actionHandlers) => {
	return (state = initialState, action) => {
		debugger;
		if (actionHandlers.hasOwnProperty(action.type))
			return	actionHandlers[action.type](state, action);
		return state;
	};
};