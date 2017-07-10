import axios from 'axios';
import {
	CREATE_LEAGUE,
	SELECT_LEAGUE,
	SELECT_TEAMS,
	FETCH_ALL_PLAYERS,
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


export function selectLeague(leagueId) {

	return dispatch => {
		dispatch({ type: SET_LOADING_STATE, loading: true });

		axios.get(`${ROOT_URL}/league/fetch/${leagueId}`)
			.then(response => {
				const { teams, players } = response.data;
				dispatch({ type: SELECT_LEAGUE, leagueId });
				dispatch({ type: SELECT_TEAMS, teams });
				dispatch({ type: FETCH_ALL_PLAYERS, players });
				dispatch({ type: SET_LOADING_STATE, loading: false });
			});
	};
}
