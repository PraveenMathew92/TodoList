import { connect } from 'react-redux';
import StarRating from './../components/StarRating';
import * as action from './../actions/StarRating';

const mapStateToProps = (state, ownprops) => ({
	rating: state.todo[ownprops.index].star,
	index: ownprops.index
})

const mapDispatchToProps = (dispatch, ownprops) => ({
	updateStar: starValue => {
		dispatch(action.updateStar(ownprops.index, starValue));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);