import {starDisplay} from './../../selectors/StarSelectors'

describe('Star selectors', ()=>{
	it('should return an array of five', ()=>{
		const ownprops = {index: 0};
		const state = {todo: [{star: 5}]};
		expect(starDisplay(state, ownprops)).toHaveLength(5);
	});
});