import axios from 'axios';
import {
	CREATE_LEAGUE,
	SELECT_LEAGUE,
	SELECT_TEAMS,
	FETCH_ALL_SEASONS,
	FETCH_ALL_PLAYERS,
	SELECT_STAFF_MEMBERS,
	REMOVE_LEAGUE,
	SET_LOADING_STATE,
	EDIT_LEAGUE,
	OPEN_SNACKBAR
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

export function editLeague(formVals, dispatch, props) {
	const { leagueName } = formVals;
	const { leagueId } = props;
	const archived = props.leagueInfo.archived === true;
	const { sportType } = props.leagueInfo;
	const url = `${ROOT_URL}/league/update/${leagueId}`;
	const body = {
		name: leagueName
	};
	axios.put(url, body)
		.then(() => {
			return dispatch({
				type: EDIT_LEAGUE,
				leagueName,
				payload: {
					[leagueId]: {
						_id: leagueId,
						name: leagueName,
						sportType: sportType,
						archived: archived
					}
				}
			});
		})
		.then(() =>{
			return dispatch({
				type: OPEN_SNACKBAR,
				message: 'Name Changed!'
			});
		})
		.catch(error => {
			throw new Error(error);
		});
}

export function selectLeague(leagueId) {

	return dispatch => {
		dispatch({ type: SET_LOADING_STATE, loading: true });

		axios.get(`${ROOT_URL}/league/fetch/${leagueId}`)
			.then(response => {
				const { teams, players, staff, seasons } = response.data;

				dispatch({ type: SELECT_LEAGUE, leagueId });
				dispatch({ type: SELECT_TEAMS, teams });
				dispatch({ type: FETCH_ALL_SEASONS, seasons });
				dispatch({ type: FETCH_ALL_PLAYERS, players });
				dispatch({ type: SELECT_STAFF_MEMBERS, staff });
				dispatch({ type: SET_LOADING_STATE, loading: false });
			});
	};

}

export function switchArchiveLeague(formVals, dispatch, props) {
	const { archived } = formVals;
	const { leagueId } = props;
	const leagueName = props.leagueInfo.name;
	const { sportType } = props.leagueInfo;
	const url = `${ROOT_URL}/league/update/${leagueId}`;
	const body = {
		archived
	};
	axios.put(url, body)
		.then(() => {
			return dispatch({
				type: EDIT_LEAGUE,
				archived,
				payload: {
					[leagueId]: {
						_id: leagueId,
						name: leagueName,
						sportType: sportType,
						archived: archived
					}
				}
			});
		})
		.catch(error => {
			throw new Error(error);
		});
}
