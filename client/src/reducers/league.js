import {FETCH_LEAGUES, CREATE_LEAGUE, SELECT_LEAGUE, CREATE_TEAM } from '../actions/types';

const defaultState = {list:[], selected:null };


export default function(state = defaultState, action) {
	switch(action.type) {
		case CREATE_LEAGUE:
			return {...state, list: [...state.list, action.payload]};	
		case FETCH_LEAGUES:
			return {...state, list: action.payload};
		case SELECT_LEAGUE:
			return {...state, selected: action.payload};
		case CREATE_TEAM:
			const {archived_teams} = state.selected;
			const update = [...archived_teams, action.payload];
			return {...state, selected: { ...state.selected, archived_teams: update }}		
	}
	return state;
}
