import React from 'react';

const NUMBER_OF_STARS = 5;
const EMPTY_STAR_CLASS = "fa fa-star-o";
const SOLID_STAR_CLASS = "fa fa-star";
const STAR_COLOR = "orange";

const starDisplay = (rating, updateStar) =>{
	let stars = [];
		for(let starValue = 1; starValue <= NUMBER_OF_STARS; starValue++){
			stars.push(<i className={
				(starValue <= rating)? SOLID_STAR_CLASS: EMPTY_STAR_CLASS 
			}
			style={{color: STAR_COLOR}}
			onClick={() => (updateStar(starValue))} 
			key={starValue.toString()}/>)
		}
	return stars;
}

export default starDisplay;