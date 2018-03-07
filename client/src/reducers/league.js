import { omit } from 'lodash';
import {
	FETCH_LEAGUES,
	CREATE_LEAGUE,
	SELECT_LEAGUE,
	REMOVE_LEAGUE,
	EDIT_LEAGUE
} from '../actions/types';

/*
	League State
	-------------
	This piece of state is one big object which is a series of key-value pairs
	with the format 'leagueId': leagueDataObject

	In addition there is a property 'selected' whose value is a
	string of the leagueId if there is a currently selected league or null

	example state w/ NBA selected:
		{
			L100: { name: 'NBA', sportType: 'BasketBall', _id: 'L100' },
			L101: { name: 'MLB', sportType: 'Baseball', _id: 'L101' },
			selected: 'L100'
		}
*/

const defaultState = { selected: null };

export default function(state = defaultState, action) {

	switch (action.type) {

		case REMOVE_LEAGUE:
			return { ...omit(state, action.leagueId), selected: null };
		case CREATE_LEAGUE:
			return {...state, [action.newLeague._id]: action.newLeague };
		case FETCH_LEAGUES:
			return { ...state, ...action.leagueInfo };
		case SELECT_LEAGUE:
			return { ...state, selected: action.leagueId };
		case EDIT_LEAGUE:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}
