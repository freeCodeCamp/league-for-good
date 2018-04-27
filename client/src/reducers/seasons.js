import {
	FETCH_ALL_SEASONS,
	CREATE_SEASON,
	REMOVE_SEASON,
	UPDATE_SEASON
	// SELECT_SEASON
} from '../actions/types';

import { combineReducers } from 'redux';
import { findIndex } from 'lodash';
import GamesReducer from './games';

// Season state - returns season info
//
// 	list [Array]		: list of season objects within a league
// 	selected [Object]	: details of a season
//
function replace(seasons, updatedSeason) {
	const _id = updatedSeason._id;
	const index = findIndex(seasons, (v) => v._id === _id );
	const head = seasons.slice(0, index);
	const tail = seasons.slice( index + 1);

	return [...head, updatedSeason, ...tail];
}

function remove(season) {
	return season._id !== this.action.deletedSeason;
}

function seasonList(state = [], action) {
	switch (action.type) {

	case FETCH_ALL_SEASONS:
		return action.seasons;

	case CREATE_SEASON:
		return [...state, action.newSeason];

	case UPDATE_SEASON:
		return replace(state, action.season);

	case REMOVE_SEASON:
		return state.filter(remove.bind({ action }));

	default:
		return state;
	}
}

export default combineReducers({
	list: seasonList,
	games: GamesReducer
});

