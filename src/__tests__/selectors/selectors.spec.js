import * as fromStore from '../../selectors/selectors'

describe('Selectors', () =>{
	it('should select ratings from state', () =>{
		const ownprops = {index: 0};
		const state = {todo: [{star: 5}, {star: 4}]};
		expect(fromStore.ratings(state, ownprops)).toEqual(5);
	});
});