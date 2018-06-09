import * as actions from './../../actions/form';
import * as type from './../../constants/ActionTypes';

describe('form actions', () =>{
	it('should create an action to add a todo', () => {
    const text = 'New Todo';
    const expectedAction = {
      type: type.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  });
});