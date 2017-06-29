import axios from 'axios';
import { INIT_AUTH_STATE, LOG_OUT, FETCH_LEAGUES } from './types';

// function to invoke once when the page is initially loaded
// checks whether the user is currently logged in with the server and
// dispatched the resolved response to the 'authReducer'
export function initAuthState() {

	return function(dispatch) {

		axios.post('/auth/authenticate')
			.then(({data}) => {
				const { leagueInfo, ...userData } = data;

				// send users info to reducer
				dispatch({ type: INIT_AUTH_STATE, payload: {loading: false, ...userData}});

				// send user's leagues to reducer
				if (leagueInfo) {
					dispatch({ type: FETCH_LEAGUES, payload: leagueInfo});
				}
			})
			.catch(err => dispatch({type: 'AUTH_ERROR'}));
	};		// TO-DO build auth-error action
}

// updates the user's state as logged out after
// a successful post to the server
export function logOut() {
	return function(dispatch) {
		axios.post('/auth/logout')
			.then((data) => {
				dispatch({type: LOG_OUT});
			});
	};
}
