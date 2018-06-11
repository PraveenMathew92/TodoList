import React, {Component} from 'react';
import Todo from './Todo'

const displayList = todo => (
	todo?
	(todo.map((element) => (
		<Todo text={element} />
	))):
	null
)

class Display extends Component{
	render(){
		return(
			<ul>
			{displayList(this.props.todo)}
			</ul>
		);
	}
}

export default Display;