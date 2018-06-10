import { connect } from 'react-redux';
import Form from './../components/Form';
import * as action from './../actions/Form';

const mapStateToProps = state => {
	return{
		value: state.todo
	}
}

const mapDispatchToProps = dispatch => ({
	addTodo: event => {
		event.preventDefault();
		dispatch(action.addTodo(event.target[0].value));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)