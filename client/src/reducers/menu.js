export default function(state = {open:false}, action){
	switch(action.type){
		case 'Toggle Menu':
			return {open: !state.open}	
	}
	return state
}