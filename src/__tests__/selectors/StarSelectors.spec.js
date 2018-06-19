import starDisplay from './../../selectors/StarSelectors';
import React from 'react';
import { mount } from 'enzyme';

const NUMBER_OF_STARS = 5;
const SOLID_STAR_CLASS = "fa fa-star";
const EMPTY_STAR_CLASS = "fa fa-star-o";
const STAR_COLOR = "orange";
const randomFunction = () => (0);

describe('Star selectors', ()=>{
	it('should return an array of five', ()=>{
		const ownprops = {index: 0};
		const state = {todo: [{star: 5}]};
		expect(starDisplay(state, ownprops)).toHaveLength(5);
	});

	it('should return all empty stars for a zero star rating', ()=>{
		const component = mount(<div> { starDisplay(0, randomFunction) } </div>);
		component.find('i').forEach((node) =>{
			expect(node.hasClass(SOLID_STAR_CLASS)).toBeFalsy();
		})
	});

	it('should return all solid stars for a five star rating', ()=>{
		const component = mount(<div> { starDisplay(5, randomFunction) } </div>);
		component.find('i').forEach((node) =>{
			expect(node.hasClass(EMPTY_STAR_CLASS)).toBeFalsy();
		})
	});
});