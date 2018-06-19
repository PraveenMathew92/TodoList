import { connect } from 'react-redux';
import StarRating from './../components/StarRating';
import * as action from './../actions/StarRating';
import * as selectors from './../selectors/StarSelectors';

const mapStateToProps = (state, ownprops) => ({
	rating: selectors.ratings(state, ownprops),
	starDisplay: selectors.starDisplay
})

const mapDispatchToProps = (dispatch, ownprops) => ({
	updateStar: starValue => {
		dispatch(action.updateStar(ownprops.index, starValue));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);