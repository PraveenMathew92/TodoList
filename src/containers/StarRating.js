import { connect } from 'react-redux';
import StarRating from './../components/StarRating';
import * as action from './../actions/StarRating';

const mapStateToProps = state => {
	rating: state.todo[ownprops.index].star
}

const mapDispatchToProps = dispatch => {
	updateStar: (starValue) =>{
		dispatch.actions.updateStar(ownprop.index, starValue)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);