import axios from 'axios';
import {
	CREATE_STAFF_MEMBER,
	UPDATE_STAFF_MEMBER,
	REMOVE_STAFF_MEMBER,
	SELECT_STAFF_MEMBERS,
	CLOSE_MODAL,
	OPEN_SNACKBAR,
} from './types';
import { ROOT_URL } from '../../globals';

export function selectStaff(staff) {
	return { type: SELECT_STAFF_MEMBERS, staff: staff };
}

export function addStaffMember(formVals, dispatch, { location }) {

	const body = {
		email: formVals.email,
		league: location.state.leagueId,
		roleTitle: formVals.role,
	};

	const action = {
		type: CREATE_STAFF_MEMBER,
		newStaff: {
			email: body.email,
			role: body.roleTitle,
			teams: [],
		},
	};

	axios.post(`${ROOT_URL}/settings/create`, body)
		.then(() =>
			dispatch(action)
		)
		.catch( err => {
			throw new Error(err);
		});
}


export function updateStaff(formVals, dispatch) {
	const { leagueId, email, role } = formVals;
	const body = { leagueId, email, role };

	dispatch({ type: CLOSE_MODAL });

	axios.put(`${ROOT_URL}/staff/update/${email}`, body)
		.then(() =>
			dispatch({ type: UPDATE_STAFF_MEMBER, updatedStaff: { ...body }})
		)
		.catch(error => {
			throw new Error(error);
		});
}

export function removeStaff(staffInfo) {

	const { email, leagueId } = staffInfo;
	const message = `${email} has been deleted as a staff member of your league`;

	return function(dispatch) {

		dispatch({ type: CLOSE_MODAL });

		axios.delete(`${ROOT_URL}/settings/remove/${email}?leagueId=${leagueId}`)
			.then(() => dispatch({
				type: REMOVE_STAFF_MEMBER,
				removedStaffEmail: email,
			}))
			.then(() => dispatch({ type: OPEN_SNACKBAR, message }));
	};
}
