import React, {Component} from 'react';

class StarRating extends Component{
	render(){
		return(
			<div>
				{this.props.rating}
			</div>
		)
	}
}

export default StarRating;