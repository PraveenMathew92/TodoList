import React from 'react';
import Form from './../../components/Form';
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

	it('should contain a input field inside the form field', () => {
		const component = shallow (<Form />);
		expect(component.find('form').find('input').exists()).toBeTruthy();
	});

	it('should contain a input field should have type submit', () => {
		const component = shallow (<Form />);
		expect(component.find('form').find('input').prop('type')).toEqual('submit');
	});

	it('should contain a text area in the field', () => {
		const component = shallow (<Form />);
		expect(component.find('form').find('textarea')).toHaveLength(1);
	});
});