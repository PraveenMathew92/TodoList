import Display from './../components/Display';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
	todo: state.todo
	}
)

export default connect(mapStateToProps)(Display);