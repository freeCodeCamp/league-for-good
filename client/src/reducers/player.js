import {
	FETCH_PLAYER,
	ADD_PLAYER,
	UPDATE_PLAYER,
	FETCH_ALL_PLAYERS
} from '../actions/types';
import { findIndex } from 'lodash';

// Player State - returns a player info
/*
	list [Array]: list of player objects (within league) containing basic info
	selected [Object]: complete player details
*/
function replacePlayer(state, { updatedPlayer }) {
	const id = updatedPlayer._id;
	const [...list] = state.list;
	const index = findIndex(list, { _id: id });

	list.splice(index, 1, updatedPlayer);
	return list;
}

export default function(state = null, action) {

	switch (action.type) {

	case FETCH_PLAYER:
		return { ...state, selected: action.playerDetails };
	case FETCH_ALL_PLAYERS:
		return { list: action.players };
	case ADD_PLAYER:
		return { ...state, list: [...state.list, action.payload] };
	case UPDATE_PLAYER:
		return { ...state, list: replacePlayer(state, action)};
	default:
		return state;

	}
}
