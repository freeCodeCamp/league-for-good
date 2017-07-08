
export default function(state = false, action) {
	switch (action.type) {

	case 'SET_LOADING_STATE':
		return action.payload;
	default:
		return state;
	}

}
