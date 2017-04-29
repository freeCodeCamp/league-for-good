export default function(state = {sportType: null}, action) {
	switch(action.type) {
		case 'Create League':
			return {sportType: action.payload};
	}
	return state;
}