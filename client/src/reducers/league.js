import {FETCH_LEAGUES, CREATE_LEAGUE } from '../actions/types';

const defaultState = {list:[], selected:null };


export default function(state = defaultState, action) {
	switch(action.type) {
		case CREATE_LEAGUE:
			return {...state, list: [...state.list, action.payload]};	
		case FETCH_LEAGUES:
			return {...state, list: action.payload};
	}
	return state;
}