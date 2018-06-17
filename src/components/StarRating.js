import React, {Component} from 'react';

const NUMBER_OF_STARS = 5;
const SOLID_STAR_CLASS = "fa fa-star";
const EMPTY_STAR_CLASS = "fa fa-star-o";
const STAR_COLOR = "orange";

const starDisplay = (rating, updateStar) => {
	let stars = [];
	for(let starValue = 1; starValue <= NUMBER_OF_STARS; starValue++){
		stars.push(<i className={
				(starValue <= rating)? SOLID_STAR_CLASS: EMPTY_STAR_CLASS 
			}
			style={{color: STAR_COLOR}}
			onClick={() => (updateStar(starValue))} />)
	}
	return stars;
}

class StarRating extends Component{
	render(){
		return(
			<div>
			{starDisplay(this.props.rating, this.props.updateStar)}
			</div>
		)
	}
}

export default StarRating;