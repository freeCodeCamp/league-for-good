import { FETCH_ROLES } from '../actions/types';

/*
 * 	Role state
 * 		roles - (Array) - list of all the roles for the app
 *
 */

export default function(state = [], action) {

	switch (action.type) {
		case FETCH_ROLES:
			return action.roles;
		default:
			return state;
	}
}
