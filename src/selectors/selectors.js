export const todolist = state =>(
	state.todo?
		state.todo.sort((a,b) => (
			 b['star']-a['star'] 
		)):
		null
)