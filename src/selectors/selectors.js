export const ratings = (state, ownprops) => (
	state.todo[ownprops.index].star
)

export const todolist = state =>(
	state.todo.sort((a,b) => (
		 b['star']-a['star'] 
)));