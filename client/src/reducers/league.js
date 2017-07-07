import {FETCH_LEAGUES, CREATE_LEAGUE, SELECT_LEAGUE } from '../actions/types';

/*
	League State

	list -     (Array) - List of all leagues objects associated w user
	selected - (Object)- The league being displayed

*/

<<<<<<< HEAD
const removeReg = ({ selected : { pending_players, ...rest }}, _id) => {
	const updatedArr = pending_players
		.filter(player => player._id !== _id);
	
	return { ...rest, pending_players: updatedArr };
}

=======
const removeReg = ({ selected: { pendingPlayers, ...rest }}, _id) => {
	const updatedArr = pendingPlayers
		.filter(player => player._id !== _id);

	return { ...rest, pendingPlayers: updatedArr };
};
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2


const defaultState = { list: [], selected: null };

export default function(state = defaultState, action) {
<<<<<<< HEAD
	
	switch (action.type) {
	
	case CREATE_LEAGUE:
		return { ...state, list: [...state.list, action.newLeague] };
	
	case FETCH_LEAGUES:
		return { ...state, list: action.leagueInfo };
	
	case SELECT_LEAGUE:
		return { ...state, selected: action.leagueData };

	case 'REMOVE_REGISTRATION':
		return { ...state, selected: removeReg(state, action.payload) };

=======

	switch (action.type) {

		case CREATE_LEAGUE:
			return {...state, list: [...state.list, action.newLeague]};

		case FETCH_LEAGUES:
			return {...state, list: action.payload};

		case SELECT_LEAGUE:
			return {...state, selected: action.leagueData};

		case 'REMOVE_REGISTRATION':
			return { ...state, selected: removeReg(state, action.payload) };

		default:
			return state;
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
	}
}
