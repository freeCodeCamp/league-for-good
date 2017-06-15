import axios from 'axios';
import { CREATE_STAFF_MEMBER } from './types';
import { rootURL } from '../../globals';

export function addStaffMember(formVals, dispatch, { location }) {
	
	const body = {
		email: formVals.email,
		league: location.state.leagueId,
	};

	axios.post(`${rootURL}/settings/create`, body)
		.then(({data}) => {
			return dispatch({ type: CREATE_STAFF_MEMBER });
		})
		.catch( err => {
			throw new Error(err);
		});
}
