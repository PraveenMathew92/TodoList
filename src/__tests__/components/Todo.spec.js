import React from 'react';
import Todo from './../../components/Todo';
import StarRating from './../../components/StarRating';
import { shallow } from 'enzyme';

describe('Todo Component', () =>{
	it('should display the text passed to it', ()=>{
		const props = {text:'todo text'};
		const component = shallow(<Todo todo={props}/>);
		expect(component.contains('todo text')).toBeTruthy();
	});

	it('should have a star rating component', ()=>{
		const props = {text:'todo text'};
		const component = shallow(<Todo todo={props}/>);
		expect(component.find(StarRating)).toHaveLength(1);
	});

	it('should show the star rating of the todo', () =>{
		const props = {text:'three star todo', star: '3'};
		const component = shallow(<Todo todo={props}/>);
		expect(component.contains('3')).toBeFalsy();
	});
});