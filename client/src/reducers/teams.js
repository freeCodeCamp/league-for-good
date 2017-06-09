import { 
	ADD_PLAYER_TO_TEAM, 
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

//Replace the team from state whose index matches payload._id; used for updating team list
function addPlayerToTeam(teams, {player, teamId}){
	const index = findIndex(teams, v => v._id === teamId);
	const head = teams.slice(0, index);
	const tail = teams.slice( index + 1);

	let updatedTeam = teams[index];
	updatedTeam.players.push(player); 
	
	return [...head, updatedTeam, ...tail];
}


//Team State - returns an Array of Objects 
	
export default function(state = [], action) {
	const { payload, type } = action;

	switch(type) {
	
	case SELECT_TEAMS:
		return action.teams;
	
	case CREATE_TEAM:
		return [action.newTeam, ...state];
	
	case UPDATE_TEAM:
		return replaceTeam(state, action.updatedTeam);

	case ADD_PLAYER_TO_TEAM:
		return addPlayerToTeam(state, payload);	
	
	case REMOVE_TEAM:
		return state.filter( removeId(action.removedTeam));
	}
	return state;
}



