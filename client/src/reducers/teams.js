import { TEAM_MANAGE_VIEW, CREATE_TEAM, REMOVE_TEAM } from '../actions/types';

const defaultState = { view: null, archived_teams: [], active_teams:[] };

export default function(state = defaultState, action) {
	switch(action.type) {
		case TEAM_MANAGE_VIEW:
			return { ...state, view: action.payload };
		case 'SELECT_TEAMS':
			return { ...state, ...action.payload };	
		case CREATE_TEAM:
			const appendedTeamList = [action.payload, ...state.archived_teams];
			return { ...state, archived_teams: appendedTeamList };
		case REMOVE_TEAM:
			const slicedTeamList = state[action.list].filter( team => team._id !== action.payload);
			return { ...state, [action.list]: slicedTeamList};		
	}
	return state;
}
