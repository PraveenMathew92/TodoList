import React, {Component} from 'react';
import StarRating from './../containers/StarRating';

class Todo extends Component{
	render(){
		return(
			<div>
				{this.props.todo.text} 
				<StarRating index={this.props.index}/>
			</div>
		)
	}
}

export default Todo;