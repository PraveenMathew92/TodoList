import React from 'react';
import StarRating from './../../components/StarRating';
import { shallow } from 'enzyme';

describe('Star Rating Component', () =>{
	it('should display five stars', ()=>{
		const component = shallow(<StarRating />);
		expect(component.contains(<i class="fa fa-star-o" />)).toBeTruthy();
	});
});