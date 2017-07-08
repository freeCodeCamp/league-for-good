import axios from 'axios';
import { 
	CREATE_LEAGUE, 
	SELECT_LEAGUE,
	SELECT_TEAMS,
	FETCH_ALL_PLAYERS, 
} from './types';
import { rootURL } from '../../globals';

// Post createLeague form to the server
// Send the response object to a reducer that will append it to user's leagues
// Redirect the user

export function createLeague(body, redirectCallback) {
	return function(dispatch) {
		axios.post(`${rootURL}/league/create`, body)
			.then(({data}) => {
				return dispatch({type: CREATE_LEAGUE, newLeague: data});
			})
			.then(()=> redirectCallback());
	};
}


export function selectLeague(leagueId) {
	
	return dispatch => {
		dispatch({ type: 'SET_LOADING_STATE', payload: true });

		axios.get(`${rootURL}/league/fetch/${leagueId}`)
			.then(response => {
				const { teams, players } = response.data;
				dispatch({ type: SELECT_LEAGUE, leagueId })
				dispatch({ type: SELECT_TEAMS, teams });
				dispatch({ type: FETCH_ALL_PLAYERS, players });
				dispatch({ type: 'SET_LOADING_STATE', payload: false });
			})
	}
}
