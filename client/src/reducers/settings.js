import { CREATE_STAFF_MEMBER, REMOVE_STAFF_MEMBER, UPDATE_STAFF_MEMBER, SELECT_STAFF_MEMBERS } from '../actions/types';

/*
 * 	Settings State
 *
 * 	staff - (Array) - List of all staff members of a league
 */

function removeStaff(removedEmail) {
	return staffEmail => removedEmail !== staffEmail;
}

export default function(state = {}, action) {
	switch (action.type) {
		
	case SELECT_STAFF_MEMBERS: 
		console.log('got staff members in reducer', action.staff);
		return { ...state, staff: action.staff };
	case CREATE_STAFF_MEMBER:
		return { ...state, staff: [action.newStaff, ...state.staff] };
	case REMOVE_STAFF_MEMBER: 
		return { ...state, staff: state.staff.filter(removeStaff(action.removedStaffEmail)) };
	case UPDATE_STAFF_MEMBER: 
		return { ...state };
	}


	return state;
}
