import React from 'react';
import Todo from './../../components/Todo';
import { shallow } from 'enzyme';

describe('Todo Component', () =>{
	it('should display the props passed to it', ()=>{
		const component = shallow(<Todo text={'todo text'}/>);
		expect(component.text()).toEqual('todo text');
	});
});