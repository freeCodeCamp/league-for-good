// User actions to add, edit, and delete teams in the league
import axios from 'axios';
import { TEAM_MANAGE_VIEW, CREATE_TEAM, REMOVE_TEAM } from './types';
import { rootURL } from '../../globals';

export function changeTeamManageView(view) {
	return { type: TEAM_MANAGE_VIEW, payload: view };
}

// create a team
export function createTeam(body) {
	return function(dispatch){
		axios.post(`${rootURL}/team/create`, body)
			.then(({data}) => {
				dispatch({ type: CREATE_TEAM, payload: data });
			})
			.catch( err => {
				throw new Error(err);
			});
	};
}
//Select teams to display from league
export function selectTeams(teams){
	return { type: 'SELECT_TEAMS', payload: teams };
}

//Delete a team from a league
export function removeTeam(team){
	const {_id, currently_active } = team;
	const list = currently_active? 'active_teams' : 'archived_teams';
	return function(dispatch){
		axios.delete(`${rootURL}/team/remove/${_id}`)
			.then((data) => {
				dispatch({ type: REMOVE_TEAM, list, payload: _id }) 
			})
	}
}