import { TEAM_MANAGE_VIEW, CREATE_TEAM, REMOVE_TEAM, SELECT_TEAMS } from '../actions/types';

const defaultState = { view: null, archived_teams: [], active_teams:[] };

//Callback passed to the filter function to remove a team
function removeId(teamId){
	return team => team._id !== teamId;
}


export default function(state = defaultState, action) {
	const { payload, list, type } = action;

	switch(action.type) {
	
	case SELECT_TEAMS:
		return { ...state, ...action.payload };
	case CREATE_TEAM:
		return { ...state, archived_teams: [payload, ...state.archived_teams] };
	case REMOVE_TEAM:
		return { ...state, [list]: state[list].filter( removeId(payload)) };
	}
	return state;
}



