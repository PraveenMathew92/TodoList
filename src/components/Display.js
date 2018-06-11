import React, {Component} from 'react';

class Display extends Component{
	render(){
		return(
			<div>
			{this.props.todo}
			</div>
		);
	}
}

export default Display;