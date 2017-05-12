// User actions to add, edit, and delete teams in the league
import axios from 'axios';
import { TEAM_MANAGE_VIEW, CREATE_TEAM } from './types';

const rootURL = 'http://localhost:4000';

export function changeTeamManageView(view) {
	return { type: TEAM_MANAGE_VIEW, payload: view };
};

export function createTeam(body) {
	return function(dispatch){
		axios.post(`${rootURL}/team/create`, body)
			.then(({data}) => {
				console.log('Team created',data);
				return dispatch({type:CREATE_TEAM });
			})
			.catch( err => console.log(err))
	};
};
