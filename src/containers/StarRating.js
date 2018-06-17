import { connect } from 'react-redux';
import StarRating from './../components/StarRating';
import * as action from './../actions/StarRating';
import * as selectors from '../selectors/selectors';

const mapStateToProps = (state, ownprops) => ({
	rating: selectors.ratings(state, ownprops),
	index: ownprops.index
})

const mapDispatchToProps = (dispatch, ownprops) => ({
	updateStar: starValue => {
		dispatch(action.updateStar(ownprops.index, starValue));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);