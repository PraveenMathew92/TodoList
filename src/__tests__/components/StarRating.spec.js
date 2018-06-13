import React from 'react';
import StarRating from './../../components/StarRating';
import { shallow } from 'enzyme';

describe('Star Rating Component', () =>{
	it('should display zero stars', ()=>{
		const component = shallow(<StarRating rating={'0'}/>);
		expect(component.contains(<i class="fa fa-star-o" />)).toBeTruthy();
	});

	it('should display five stars', ()=>{
		const component = shallow(<StarRating rating={'5'}/>);
		expect(component.contains(<i class="fa fa-star" />)).toBeTruthy();
	});

	it('should show darkened stars equal to the rating', ()=>{
		const component = shallow(<StarRating rating={'3'}/>);
		expect(component.contains(<i class="fa fa-star-o" />)).toBeTruthy();
		expect(component.contains(<i class="fa fa-star" />)).toBeTruthy();

	});
});