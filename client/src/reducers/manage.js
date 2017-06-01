// Reducer functions for changing management views
import { CHANGE_MANAGE_VIEW, RESET_DASHBOARD } from '../actions/types';

// defaults to viewing no panels
const defaultState = { view: null };

export default function(state = defaultState, action) {
	switch (action.type) {
	
	case CHANGE_MANAGE_VIEW:
		return { view: action.view };
	
	case RESET_DASHBOARD:
		return { view: null };	
	}
	return state;
}
