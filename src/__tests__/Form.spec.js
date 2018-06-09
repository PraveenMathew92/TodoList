import React from 'react';
import Form from './../components/Form';
import { shallow } from 'enzyme';

describe('Form component', () => {
	it('should display header', () => {
		const component = shallow(<Form />);
		expect(component.text()).toEqual('Form');
	});

	it('should contain a form field', () => {
		const component = shallow (<Form />);
		expect(component.find('form').exists()).toBeTruthy();
	});

	it('should contain a input feild inside the form field', () => {
		const component = shallow (<Form />);
		expect(component.find('form').find('input').exists()).toBeTruthy();
	});
});