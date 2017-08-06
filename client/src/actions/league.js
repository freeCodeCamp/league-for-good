import axios from 'axios';
import {
	CREATE_LEAGUE,
	SELECT_LEAGUE,
	SELECT_TEAMS,
	FETCH_ALL_SEASONS,
	FETCH_ALL_PLAYERS,
	SELECT_STAFF_MEMBERS,
	REMOVE_LEAGUE,
	SET_LOADING_STATE
} from './types';
import { ROOT_URL } from '../../globals';

// Post createLeague form to the server
// Send the response object to a reducer that will append it to user's leagues
// Redirect the user

export function createLeague(body, redirectCallback) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/league/create`, body)
			.then(({data}) => {
				return dispatch({type: CREATE_LEAGUE, newLeague: data});
			})
			.then(()=> redirectCallback());
	};
}

export function deleteLeague(_, dispatch, props) {
	const { history, location: { state: { leagueId }}} = props;
	const url = `${ROOT_URL}/league/remove/${leagueId}`;
	const action = { type: REMOVE_LEAGUE, leagueId };

	axios.delete(url)
		.then(() => {
			dispatch(action);
		})
		.then(() => history.push('/'))
		.catch(err => { throw err; });
}


export function selectLeague(leagueId) {

	return dispatch => {

		axios.get(`${ROOT_URL}/league/fetch/${leagueId}`)
			.then(response => {
				console.log('league response', response);
				const { teams, players, staff, seasons, permissions } = response.data;
				const leagueInfo = { leagueId, permissions };

				dispatch({ type: SELECT_LEAGUE, leagueInfo});
				dispatch({ type: SELECT_TEAMS, teams });
				dispatch({ type: FETCH_ALL_SEASONS, seasons });
				dispatch({ type: FETCH_ALL_PLAYERS, players });
				dispatch({ type: SELECT_STAFF_MEMBERS, staff });
			});
	};

}
