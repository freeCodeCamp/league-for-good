import { FETCH_SEASON, FETCH_ALL_SEASONS }  from '../actions/types';


// Season state - returns season info
//
// 	list [Array]		: list of season objects within a league
// 	selected [Object]	: details of a season
//

export default function(state = null, action) {
	switch (action.type) {

	case FETCH_SEASON: 
		return { ...state };
	case FETCH_ALL_SEASONS: 
		return { ...state, list: action.seasonsList };
	}

	return state;
}
