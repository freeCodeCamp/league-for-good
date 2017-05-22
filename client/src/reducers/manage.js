// Reducer functions for changing management views
import { CHANGE_MANAGE_VIEW } from '../actions/types';

// defaults to viewing no panels
const defaultState = { view: null };

export default function(state = defaultState, action) {
	switch (action.type) {
		case CHANGE_MANAGE_VIEW:
			return { ...state, view: action.payload };
	}
	return state;
}
