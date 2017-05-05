import {TOGGLE_MENU} from './types';

//Triggers the menuReducer to switch it's 'open' state  
export function toggleMenu(){
	return { type:TOGGLE_MENU };
}
