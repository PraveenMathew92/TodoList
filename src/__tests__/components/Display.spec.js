import React from 'react';
import Display from './../../components/Display';
import { shallow } from 'enzyme';

describe('Display Component', () =>{
	it('should display the props passed to it', ()=>{
		const component = shallow(<Display todo={'todo'}/>);
		expect(component.text()).toEqual('todo');
	});
});