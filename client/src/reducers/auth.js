import { INIT_AUTH_STATE, LOG_OUT } from '../actions/types';

<<<<<<< HEAD
//initialize authentication state as logged out and loading so nothing
//renders until the page can make a post request to the server verifying
//a user having an active session
const defaultState = { loggedIn:false, loading:true };
=======
// initialize authentication state as logged out and loading so nothing
// renders until the page can make a post request to the server verifying
// a user having an active session
const defaultState = {loggedIn: false, loading: true};
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2

/*
Authentication State
	loggedIn : Boolean
	loading  : Boolean
	user     : Object
*/
export default function(state = defaultState, action) {
	switch (action.type) {

		case INIT_AUTH_STATE:
			return action.payload;

		case LOG_OUT:
			return {...state, loggedIn: false };
		default:
			return state;
	}
}
