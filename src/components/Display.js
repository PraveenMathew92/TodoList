import React, {Component} from 'react';
import Todo from './Todo'

const getKey = (element) => (
	(element.todo && element.todo.text)?
	element.todo.text:
	""
)

const displayList = todo => (
	todo?
	(todo.map((element, index) => (
		<Todo todo={element} index={index} key={getKey(element)}/>
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