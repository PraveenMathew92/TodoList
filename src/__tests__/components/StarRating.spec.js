import React from 'react';
import StarRating from './../../components/StarRating';
import { shallow } from 'enzyme';

describe('Star Rating Component', () =>{
	it('should display the props passed to it', ()=>{
		const component = shallow(<StarRating rating={'2'}/>);
		expect(component.text()).toEqual('2');
	});
});