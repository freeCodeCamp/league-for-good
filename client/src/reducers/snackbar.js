// import { TOGGLE_MENU } from '../actions/types';

export default function(state = {open: false, message:''}, action){
	switch(action.type){
		case 'OPEN_SNACKBAR':
			return {open:true, message:action.payload};
		case 'CLOSE_SNACKBAR':
			return {open:false, message:''};		
	}
	return state;
}