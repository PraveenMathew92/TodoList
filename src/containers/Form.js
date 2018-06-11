import { connect } from 'react-redux';
import Form from './../components/Form';
import * as action from './../actions/Form';

const mapDispatchToProps = dispatch => ({
	addTodo: event => {
		event.preventDefault();
		dispatch(action.addTodo(event.target[0].value));
	}
})

export default connect(null, mapDispatchToProps)(Form)