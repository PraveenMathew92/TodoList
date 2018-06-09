import React from 'react';
import Form from './../components/Form';
import { shallow } from 'enzyme';

describe('Form component', () => {
	it('should display header', () => {
		const component = shallow(<Form />);
		expect(component.find('Form')).toBeTruthy();
	});
});