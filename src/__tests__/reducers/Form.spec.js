import { createReducer } from '../../reducers/Form';

describe('form reducer', () => {
	it('should return the initial state if the state is undefined', () =>{
		const initialState = [];
		expect(createReducer(initialState, {})).toEqual(initialState);
	});
});