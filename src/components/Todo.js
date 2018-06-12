import React, {Component} from 'react';
import StarRating from './StarRating';

class Todo extends Component{
	render(){
		return(
			<div>
				{this.props.todo.text} 
				<StarRating rating={this.props.todo.star} />
			</div>
		)
	}
}

export default Todo;