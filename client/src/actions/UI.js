import { TOGGLE_MENU, OPEN_MODAL } from './types';

//Triggers the menuReducer to switch it's 'open' state  
export function toggleMenu(){
	return { type: TOGGLE_MENU };
}

//Mark the modals state as opened and specify a view
export function openModal(view, data = null){
	return { type: OPEN_MODAL, payload: { view, data } };
}


