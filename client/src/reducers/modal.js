import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

/*
	Modal State

	open : [Boolean]- modal open state 
	view : [String] - modal's inner content
	data : [Object] - any props to be passed into the modal

*/

export default function(state = { open: false, view: 'default' }, action){
	switch(action.type){
	
	case OPEN_MODAL:
		return { open: true, ...action.payload };
	
	case CLOSE_MODAL:
		return {open: false, view: 'default', data: null };		
	}
	return state;
}
