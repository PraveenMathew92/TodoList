import * as actions from './../../actions/StarRating';
import * as type from './../../constants/ActionTypes';

describe('star rating actions', () =>{
	it('should create an action to update a star', () => {
    const id = 2;
    const star = 4;
    const expectedAction = {
      type : type.UPDATE_STAR,
      id : 2,
      star : 4
    }
    expect(actions.updateStar(id, star)).toEqual(expectedAction)
  });
});