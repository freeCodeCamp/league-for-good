import {
	CREATE_STAFF_MEMBER,
	REMOVE_STAFF_MEMBER,
	UPDATE_STAFF_MEMBER,
	SELECT_STAFF_MEMBERS
} from '../actions/types';

/*
 * 	Settings State
 *
 * 	staff - (Array) - List of all staff members of a league
 */

function removeStaff({removedStaffEmail}) {
	return staff => removedStaffEmail !== staff.email;
}

function updateStaff(staff, updatedStaffMember) {
	return staff.map(function(staff) {
		if (staff.email === updatedStaffMember.origEmail) {
			return {
				...staff,
				email: updatedStaffMember.email,
				role: updatedStaffMember.role
			};
		}
		return staff;
	});
}

export default function(state = {}, action) {
	switch (action.type) {

		case SELECT_STAFF_MEMBERS:
			return { ...state, staff: action.staff };
		case CREATE_STAFF_MEMBER:
			return { ...state, staff: [action.newStaff, ...state.staff] };
		case REMOVE_STAFF_MEMBER:
			return { ...state, staff: state.staff.filter(removeStaff(action)) };
		case UPDATE_STAFF_MEMBER:
			return { ...state, staff: updateStaff(state.staff, action.updatedStaff) };
		default:
			return state;
	}
}
