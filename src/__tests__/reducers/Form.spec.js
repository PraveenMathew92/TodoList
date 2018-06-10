import { createReducer } from './../../reducers/Form';
import * as actions from './../../actions/Form';

describe('form reducer', () => {
	it('should return the initial state if the state is undefined', () =>{
		const initialState = [];
		expect(createReducer(initialState, {})(undefined, {})).toEqual(initialState);
	});

	it('should add the first todo to the list', () =>{
		const initialState = [];
		const action = actions.addTodo('a new todo');

		const expectedState = {todo: ['a new todo']};
		expect(createReducer(initialState)(initialState, action)).toEqual(expectedState);
	});
});