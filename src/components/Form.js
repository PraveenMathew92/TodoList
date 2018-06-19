import React,  {Component} from 'react';
import './../Form.css'

class Form extends Component{
	render() {
		return(
			<div id="form">
				<h1>Todo</h1>
				<form onSubmit={this.props.addTodo}>
					<textarea placeholder="addTodo"/>
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Form;