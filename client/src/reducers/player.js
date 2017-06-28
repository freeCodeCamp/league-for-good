import {
	FETCH_PLAYER,
	ADD_PLAYER,
	FETCH_ALL_PLAYERS
} from '../actions/types';


// Player State - returns a player info
/*
	list [Array]: list of player objects (within league) containing basic info
	selected [Object]: complete player details
*/

export default function(state = null, action) {

	switch (action.type) {

	case FETCH_PLAYER:
		return { ...state, selected: action.playerDetails };
	case FETCH_ALL_PLAYERS:
		return { list: action.playersList };
	case ADD_PLAYER:
		return { ...state, list: [...state.list, action.payload] };
	}

	return state;
}


