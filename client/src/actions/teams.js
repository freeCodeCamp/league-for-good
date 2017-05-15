// User actions to add, edit, and delete teams in the league
import axios from 'axios';
import { TEAM_MANAGE_VIEW, CREATE_TEAM, FETCH_TEAMS } from './types';
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
