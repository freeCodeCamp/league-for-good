import { FETCH_ROSTER, ADD_PLAYER_TO_ROSTER } from '../actions/types';
import { findIndex } from 'lodash';


// Roster State returns a team from the team state, populated with player info

export default function(state = null, action) {

	switch (action.type) {

		case FETCH_ROSTER:
			return action.rosterData;
		case ADD_PLAYER_TO_ROSTER:
			return {...state, players: [action.newPlayer, ...state.players]};
		default:
			return state;
	}
}
