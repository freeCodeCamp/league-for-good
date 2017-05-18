import { TOGGLE_MENU, OPEN_MODAL } from './types';

//Triggers the menuReducer to switch it's 'open' state  
export function toggleMenu(){
	return { type: TOGGLE_MENU };
}

export function openModal(view){
	return { type: OPEN_MODAL, payload: view };
}


