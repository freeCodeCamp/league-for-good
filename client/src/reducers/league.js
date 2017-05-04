export default function(state = {list:[]}, action) {
	switch(action.type) {
	case 'FETCH_LEAGUES':
		console.log(action.payload, 'reducer');
		return {list: action.payload};
	}
	return state;
}