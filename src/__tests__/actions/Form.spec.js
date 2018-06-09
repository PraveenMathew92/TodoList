import * as actions form './../../actions/form';

describe('form actions', () =>{
	it('should create an action to add a todo', () => {
    const text = 'New Todo';
    const expectedAction = {
      type: 'ADD_TODO',
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  });
});