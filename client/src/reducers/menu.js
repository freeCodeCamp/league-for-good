import { TOGGLE_MENU } from '../actions/types';

export default function(state = {open: true}, action){
	switch(action.type){
	case TOGGLE_MENU:
		return {open: !state.open};
	}
	return state;
}