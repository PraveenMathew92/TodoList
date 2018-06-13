import React, {Component} from 'react';

const starDisplay = (rating, updateStar) =>{
	let stars = [ ];
	for(let i = 0; i < 5; i++){
		const starValue = i + 1;
		stars.push(<i className={(starValue <= rating)?"fa fa-star":"fa fa-star-o"}
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