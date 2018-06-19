import React, {Component} from 'react';

class StarRating extends Component{
	render(){
		return(
			<div>
			{this.props.starDisplay(this.props.rating, this.props.updateStar)}
			</div>
		)
	}
}

export default StarRating;