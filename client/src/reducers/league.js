import {FETCH_LEAGUES, CREATE_LEAGUE, SELECT_LEAGUE } from '../actions/types';

/*
	League State

	list -     (Array) - List of all leagues objects associated w user
	selected - (Object)- The league being displayed

*/

const removeReg = ({ selected: { pendingPlayers, ...rest }}, _id) => {
	const updatedArr = pendingPlayers
		.filter(player => player._id !== _id);

	return { ...rest, pendingPlayers: updatedArr };
};


const defaultState = { list: [], selected: null };

export default function(state = defaultState, action) {

	switch (action.type) {

		case CREATE_LEAGUE:
			return {...state, list: [...state.list, action.newLeague]};

		case FETCH_LEAGUES:
			return {...state, list: action.leagueInfo };

		case SELECT_LEAGUE:
			return {
				...state,
				selected: state.list.find(league => league._id === action.leagueId)
			};

		case 'REMOVE_REGISTRATION':
			return { ...state, selected: removeReg(state, action.payload) };

		default:
			return state;
	}
}
