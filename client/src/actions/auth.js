import axios from 'axios';
import { INIT_AUTH_STATE, LOG_OUT, FETCH_LEAGUES, FETCH_ROLES } from './types';

// function to invoke once when the page is initially loaded
// checks whether the user is currently logged in with the server and
<<<<<<< HEAD
// dispatched the resolved response to the 'authReducer' 
=======
// dispatched the resolved response to the 'authReducer'
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
export function initAuthState() {

	return function(dispatch) {

		axios.post('/auth/authenticate')
			.then(({data}) => {
<<<<<<< HEAD
				const { leagueInfo, roles, ...userData } = data;
				console.log('auth action', leagueInfo, roles, userData);	
				//send users info to reducer	
				dispatch({ type: INIT_AUTH_STATE, payload: {loading: false, ...userData}});
=======
				const { leagueInfo, ...userData } = data;
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2

				// send users info to reducer
				dispatch({
					type: INIT_AUTH_STATE,
					payload: {loading: false, ...userData}
				});

				// send user's leagues to reducer
				if (leagueInfo) {
					dispatch({ type: FETCH_LEAGUES, leagueInfo });
					dispatch({ type: FETCH_ROLES, roles });
				}
			})
<<<<<<< HEAD
			.catch(err => dispatch({type: 'AUTH_ERROR'}));
	};		//TO-DO build auth-error action
=======
			.catch(() => dispatch({type: 'AUTH_ERROR'}));
	};
	// TO-DO build auth-error action
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
}

// updates the user's state as logged out after
// a successful post to the server
export function logOut() {
	return function(dispatch) {
		axios.post('/auth/logout')
			.then(() => {
				dispatch({type: LOG_OUT});
			});
	};
}
