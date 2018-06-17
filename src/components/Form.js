import React,  {Component} from 'react';

class Form extends Component{
	render() {
		return(
			<div>
				Todo
				<form onSubmit={this.props.addTodo}>
					<textarea/>
					<br />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Form;