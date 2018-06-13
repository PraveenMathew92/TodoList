import React from 'react';
import Display from './../../components/Display';
import Todo from './../../components/Todo';
import { shallow } from 'enzyme';

describe('Display Component', () =>{
	it('should render todo component', () => {
		const component = shallow(<Display todo={['one']}/>);
		const childComponent = component.find(Todo);
		expect(childComponent).toHaveLength(1);
	});

	it('should render todo component equal to number of todos', () => {
		const component = shallow(<Display todo={[{text: 'one', star: 0}, 
			{text: 'two', star: 0}, 
			{text: 'three', star: 0}]} />);
		const childComponent = component.find(Todo);
		expect(childComponent).toHaveLength(3);
	});

	it('should pass index to the todo component', ()=>{
		const component = shallow(<Display todo={[{text: 'one', star: 0}, 
			{text: 'two', star: 0}, 
			{text: 'three', star: 0}]} />);
		expect(component.childAt(1).prop('index')).toEqual(1);
	});

	it('should render the todo component in decreasing order of star rating', ()=>{
		const component = shallow(<Display todo={[{text: 'one', star: 4}, 
			{text: 'two', star: 3}, 
			{text: 'three', star: 5}]} />);
		const expectedProp = [
			{text: 'three', star: 5},
			{text: 'one', star: 4}, 
			{text: 'two', star: 3}
			];
		expect(component.prop('todo')).toEqual(expectedProp);
	});
});