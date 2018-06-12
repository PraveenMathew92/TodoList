import React from 'react';
import Todo from './../../components/Todo';
import StarRating from './../../components/StarRating';
import { shallow } from 'enzyme';

describe('Todo Component', () =>{
	it('should display the text passed to it', ()=>{
		const component = shallow(<Todo text={'todo text'}/>);
		expect(component.contains('todo text')).toBeTruthy();
	});

	it('should have a star rating component', ()=>{
		const component = shallow(<Todo />);
		expect(component.find(StarRating)).toHaveLength(1);
	});
});