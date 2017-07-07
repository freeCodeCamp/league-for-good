import axios from 'axios';
<<<<<<< HEAD
import { CREATE_STAFF_MEMBER, REMOVE_STAFF_MEMBER, UPDATE_STAFF_MEMBER, SELECT_STAFF_MEMBERS, CLOSE_MODAL, OPEN_SNACKBAR } from './types';
=======
import {
	CREATE_STAFF_MEMBER,
	REMOVE_STAFF_MEMBER,
	SELECT_STAFF_MEMBERS,
	CLOSE_MODAL,
	OPEN_SNACKBAR
} from './types';
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
import { rootURL } from '../../globals';

export function selectStaff(staff) {
	return { type: SELECT_STAFF_MEMBERS, staff: staff };
}

export function addStaffMember(formVals, dispatch, { location }) {

	const body = {
		email: formVals.email,
<<<<<<< HEAD
		league: location.state.leagueId,
		roleTitle: formVals.role,
	};

	axios.post(`${rootURL}/settings/create`, body)
		.then(({data}) => {
			return dispatch({ type: CREATE_STAFF_MEMBER, newStaff: { email: body.email, role: body.roleTitle, teams: [] }});
=======
		league: location.state.leagueId
	};

	axios.post(`${rootURL}/settings/create`, body)
		.then(() => {
			return dispatch({ type: CREATE_STAFF_MEMBER, newStaff: body.email });
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
		})
		.catch( err => {
			throw new Error(err);
		});
}

export function updateStaff(formVals, dispatch) {
	const { leagueId, email, role } = formVals;
	const body = { leagueId, email, role };
	dispatch({ type: CLOSE_MODAL });

	axios.put(`${rootURL}/staff/update/${email}`, body)
		.then((data) => {

			return dispatch({ type: UPDATE_STAFF_MEMBER, updatedStaff: { ...body }});

		})
		.catch(error => {
			throw new Error(error);
		});
}

export function removeStaff(staffInfo) {

	const { email, leagueId } = staffInfo;
	const message = `${email} has been deleted as a staff member of your league`;

	return function(dispatch) {

		dispatch({ type: CLOSE_MODAL });

		axios.delete(`${rootURL}/settings/remove/${email}`,
				{ params: { leagueId } })
			.then(() => dispatch({
				type: REMOVE_STAFF_MEMBER,
				removedStaffEmail: email
			}))
			.then(() => dispatch({ type: OPEN_SNACKBAR, message }));
	};
}
