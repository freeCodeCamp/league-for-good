import { FETCH_ROLES } from '../actions/types';

/*
 * 	Role state
 * 		roles - (Array) - list of all the roles for the app
 *
 */

export default function(state = [], action) {
	switch(action.type) {

	case FETCH_ROLES:
		console.log('role reducer', action);
		return action.roles;
	}

	return state;
}
