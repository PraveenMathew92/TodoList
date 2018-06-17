import * as fromStore from '../../selectors/selectors'

describe('Selectors', () =>{
	it('should select ratings from state', () =>{
		const ownprops = {index: 0};
		const state = {todo: [{star: 5}, {star: 4}]};
		expect(fromStore.ratings(state, ownprops)).toEqual(5);
	});

	it('should select todos in decreasing order of star rating', () =>{
		const state = {todo: [{star: 4}, {star: 3}, {star: 5}]};
		const expectedList = [{star: 5}, {star: 4}, {star: 3}];
		expect(fromStore.todolist(state)).toEqual(expectedList);
	});

	it('should return null when the todod is not present in the state', () =>{
		const state = {};
		expect(fromStore.todolist(state)).toEqual(null);
	});
});