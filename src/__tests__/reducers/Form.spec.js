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

		const expectedState = {todo: [{text: 'a new todo', star: 0}]};
		expect(createReducer(initialState)(initialState, action)).toEqual(expectedState);
	});

	it('should add the second todo to the list', () =>{
		const initialState = [];
		const action = actions.addTodo('second todo');
		const state = createReducer()({todo: [{text: 'a new todo', star: 0}]}, action);

		const expectedState = {todo: [{text: 'a new todo', star: 0}, {text: 'second todo', star: 0}]};
		expect(state).toEqual(expectedState);
	});
});