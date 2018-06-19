import { createReducer } from './../../reducers/createReducer';
import * as actions from './../../actions/StarRating';

describe('star rating reducer', () => {
	it('should update the star of the todo', () =>{
		const initialState = {todo: [{text:'a todo', star: 2}]};
		const action = actions.updateStar(0, 3);
		const expectedState = {todo: [{text:'a todo', star: 3}]};
		expect(createReducer()(initialState, action)).toEqual(expectedState);
	});
});