export default function(state = {open: true}, action){
	switch(action.type) {
		case 'Toggle Menu':
			return {open: !state.open};
	}
	return state;
}