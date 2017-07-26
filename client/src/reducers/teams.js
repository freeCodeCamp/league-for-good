import {
	CREATE_TEAM,
	REMOVE_TEAM,
	UPDATE_TEAM,
	SELECT_TEAMS
} from '../actions/types';

import { findIndex } from 'lodash';

// Callback passed to the filter function to remove a team
function removeId(teamId) {
	return team => team._id !== teamId;
}

// Replace the team from state whose index matches payload._id
// Used for updating team list
function replaceTeam(currTeams, action) {
	let [...teams] = currTeams;
	const { updatedTeam } = action;
	if (action.playerId) {
		return swapPlayer(teams, action);
	}

	const index = findIndex(teams, {_id: updatedTeam._id});

	teams.splice(index, 1, updatedTeam);
	return teams;
}

// Update player list when player swaps teams
function swapPlayer(teams, action) {
	const { oldTeam, newTeam, playerId } = action;

	teams.forEach(team => {
		if (team._id === oldTeam) {
			let index = team.players.indexOf(playerId);
			team.players.splice(index, 1);
		} else if (team._id === newTeam) {
			team.players.push(playerId);
		}
	});
	return teams;
}

// Team State - returns an Array of Objects

export default function(state = [], action) {

	switch (action.type) {

	case SELECT_TEAMS:
		return action.teams;

	case CREATE_TEAM:
		return [action.newTeam, ...state];

	case UPDATE_TEAM:
		return replaceTeam(state, action);

	case REMOVE_TEAM:
		return state.filter( removeId(action.removedTeam));

	default:
		return state;
	}
}
