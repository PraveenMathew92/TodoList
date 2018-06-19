import { connect } from 'react-redux';
import StarRating from './../components/StarRating';
import * as action from './../actions/StarRating';
import starDisplay from './../selectors/StarSelectors';
import * as selectors from './../selectors/selectors';

import React from 'react';

const mapStateToProps = (state, ownprops) => ({
	rating: selectors.ratings(state, ownprops),
	starDisplay: starDisplay
})

const mapDispatchToProps = (dispatch, ownprops) => ({
	updateStar: starValue => {
		dispatch(action.updateStar(ownprops.index, starValue));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(StarRating);