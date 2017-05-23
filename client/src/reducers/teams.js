import { 
	TEAM_MANAGE_VIEW, 
	CREATE_TEAM, 
	REMOVE_TEAM, 
	UPDATE_TEAM,
	SELECT_TEAMS,
} from '../actions/types';

import { findIndex } from 'lodash';

//Callback passed to the filter function to remove a team
function removeId(teamId){
	return team => team._id !== teamId;
}

//Replace the team from state whose index matches payload._id; used for updating team list
function replaceTeam(currTeams, updatedTeam){
	const _id = updatedTeam._id;
	const index = findIndex(currTeams, (v) => v._id === _id );
	const head = currTeams.slice(0, index);
	const tail = currTeams.slice( index + 1);
	
	return [...head, updatedTeam, ...tail];
}

export default function(state = [], action) {
	const { payload, list, type } = action;

	switch(action.type) {
	
	case SELECT_TEAMS:
		return payload;
	
	case CREATE_TEAM:
		return [payload, ...state];
	
	case UPDATE_TEAM:
		return replaceTeam(state, payload);
	
	case REMOVE_TEAM:
		return state.filter( removeId(payload));
	}
	return state;
}



