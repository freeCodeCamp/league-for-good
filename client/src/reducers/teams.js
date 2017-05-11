import { TEAM_MANAGE_VIEW } from '../actions/types';


export default function(state = { view: null }, action) {
	switch(action.type) {
		case TEAM_MANAGE_VIEW:
			return { ...state, view: action.payload };
	}
	return state;
}
