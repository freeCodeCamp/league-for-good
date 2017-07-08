
export default function(state = false, action) {
	switch(action.type) {

	case 'SET_LOADING_STATE':
		return action.payload;
	}
	return state;
}