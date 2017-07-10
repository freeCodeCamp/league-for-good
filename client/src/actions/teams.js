// User actions to add, edit, and delete teams in the league
import axios from 'axios';
import {
	CREATE_TEAM,
	REMOVE_TEAM,
	UPDATE_TEAM,
	OPEN_SNACKBAR,
	CLOSE_MODAL,
} from './types';
import { ROOT_URL } from '../../globals';


// create a team
export function createTeam( formVals, dispatch, { location } ) {

	const body = {
		name: formVals.name,
		league: location.state.leagueId,
	};

	axios.post(`${ROOT_URL}/team/create`, body)
		.then(({data}) => {

			return dispatch({ type: CREATE_TEAM, newTeam: data });
		})
		.catch( err => {
			throw new Error(err);
		});
}


// Edit a team's name and active status
export function updateTeam(formVals, dispatch) {

	const { _id, currentlyActive, name } = formVals;
	const body = { name, currentlyActive };
	dispatch({ type: CLOSE_MODAL });

	axios.put(`${ROOT_URL}/team/update/${_id}`, body)
		.then(() => {
			return dispatch({
				type: UPDATE_TEAM,
				updatedTeam: {...formVals, ...body },
			});
		})
		.catch( error => {
			throw new Error(error);
		});
}

// Delete a team from a league
export function removeTeam(team) {
	const { _id, name } = team;

	const teamName = name.replace(/^The/, '');
	const message = `The ${teamName} have been deleted from your league`;

	return function( dispatch ) {

		dispatch({ type: CLOSE_MODAL });

		axios.delete(`${ROOT_URL}/team/remove/${_id}`)
			.then(() => dispatch({ type: REMOVE_TEAM, removedTeam: _id }))
			.then(() =>
				dispatch({ type: OPEN_SNACKBAR, message })
			);
	};
}
