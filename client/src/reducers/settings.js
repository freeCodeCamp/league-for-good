import { CREATE_STAFF_MEMBER } from '../actions/types';

/*
 * 	Settings State
 *
 * 	staffList - (Array) - List of all staff members of a league
 */

const defaultState = { staffList: [] };

export default function(state = defaultState, action) {
	switch (action.type) {
		
	case CREATE_STAFF_MEMBER:
		return {...state };
	}

	return state;
}
