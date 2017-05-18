export default function(state = { open: false, view: 'default' }, action){
	switch(action.type){
		case 'OPEN_MODAL':
			return { open: true, view: action.payload };
		case 'CLOSE_MODAL':
			return  {open: false, view: 'default' };		
	}
	return state;
}
