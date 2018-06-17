import Display from './../components/Display';
import { connect } from 'react-redux';
import * as selectors from '../selectors/selectors';

const mapStateToProps = state =>({
	todo: selectors.todolist(state)
	}
)

export default connect(mapStateToProps)(Display);