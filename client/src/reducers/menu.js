import { TOGGLE_MENU } from '../actions/types';

/*
	State of left-side menu

	open: [Boolean] - is menu open ?
	itemSelected: [String] - for highlighting menuItem that was selected (TODO)
*/
export default function(state = {open: true}, action) {

	switch (action.type) {

	case TOGGLE_MENU:
		return {open: !state.open};
	default:
		return state;
	}
}
