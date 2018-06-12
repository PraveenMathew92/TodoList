import React, {Component} from 'react';
import StarRating from './StarRating';

class Todo extends Component{
	render(){
		return(
			<div>
				{this.props.text}
				<StarRating rating={this.props.star} />
			</div>
		)
	}
}

export default Todo;