import {
	FETCH_ALL_SEASONS,
	CREATE_SEASON,
	REMOVE_SEASON,
	UPDATE_SEASON,
	SELECT_SEASON
} from '../actions/types';

import { findIndex } from 'lodash';

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

export default function(state = {}, action) {
	switch (action.type) {

	case FETCH_ALL_SEASONS:
		return { ...state, list: action.seasons };
	case CREATE_SEASON:
		return { ...state, list: [...state.list, action.newSeason] };
	case UPDATE_SEASON:
		return {
			...state,
			list: replace(state.list, action.currSeason)
		};
	case REMOVE_SEASON:
		return {
			...state,
			list: state.list.filter(remove.bind({ action }))
		};
	case SELECT_SEASON:
		return {
			...state,
			selected: action.currentSeason
		};

	default:
		return state;
	}
}
