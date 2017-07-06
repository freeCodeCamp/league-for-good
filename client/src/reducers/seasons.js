import { 
	FETCH_SEASON, 
	FETCH_ALL_SEASONS, 
	CREATE_SEASON, 
	REMOVE_SEASON, 
	UPDATE_SEASON, 
}  from '../actions/types';

import { findIndex } from 'lodash';

// Season state - returns season info
//
// 	list [Array]		: list of season objects within a league
// 	selected [Object]	: details of a season
//
function replace(currSeasons, updatedSeason){
	const _id = updatedSeason._id;
	const index = findIndex(currSeasons, (v) => v._id === _id );
	const head = currSeasons.slice(0, index);
	const tail = currSeasons.slice( index + 1);
	
	return [...head, updatedSeason, ...tail];
}

export default function(state = null, action) {
	switch (action.type) {

	case FETCH_SEASON: 
		return { ...state };
	case FETCH_ALL_SEASONS: 
		return { ...state, list: action.seasonsList };
	case CREATE_SEASON:
		return { ...state, list: [...state.list, action.newSeason] };	
	case UPDATE_SEASON:
		return {
			...state,
			list: replace(state.list, action.season),
		};
	case REMOVE_SEASON:
		return {
			...state,
			list: state.list.filter( season => season._id !== action.deletedSeason),
		}		
	}

	return state;
}
