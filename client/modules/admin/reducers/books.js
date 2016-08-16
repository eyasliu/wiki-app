const init = {
	list: [],
	tags: []
}

export default function(state = init, action){
	switch(action.type){
		case 'GETLIST':
			return {
				...state,
				list: [
					...action.data
				]
			}
		default :
			return state;
	}
}