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
		const component = shallow(<Display todo={['one', 'two', 'three']} />);
		const childComponent = component.find(Todo);
		expect(childComponent).toHaveLength(3);
	});
});