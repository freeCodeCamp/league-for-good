export default function(state = { open: false, view: 'default' }, action){
	switch(action.type){
	case 'OPEN_MODAL':
		return { open: true, ...action.payload };
	case 'CLOSE_MODAL':
		return  {open: false, view: 'default', data: null };		
	}
	return state;
}
