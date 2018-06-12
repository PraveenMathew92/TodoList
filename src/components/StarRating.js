import React, {Component} from 'react';

const starDisplay = rating =>{
	let stars = [ ];
	let i;
	for(i = 0; i < 5; i++){
		stars.push(<i class="fa fa-star-o" />)
	}
	return stars;
}

class StarRating extends Component{
	render(){
		return(
			<div>
			{starDisplay(this.props.rating)}
			</div>
		)
	}
}

export default StarRating;