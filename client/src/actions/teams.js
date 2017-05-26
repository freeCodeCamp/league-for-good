// User actions to add, edit, and delete teams in the league
import axios from 'axios';
import { CREATE_TEAM, REMOVE_TEAM, SELECT_TEAMS, UPDATE_TEAM, OPEN_SNACKBAR, CLOSE_MODAL } from './types';
import { rootURL } from '../../globals';


// create a team
export function createTeam( formVals, dispatch, { league } ) {
	
	const body = { 
		name: formVals.name, 
		league: league._id, 
	};

	axios.post(`${rootURL}/team/create`, body)
		.then(({data}) => {
			
			return dispatch({ type: CREATE_TEAM, payload: data });
		})
		.catch( err => {
			throw new Error(err);
		});
}

//Select teams to display from league
export function selectTeams(teams){
	return { type: SELECT_TEAMS, payload: teams };
}

//Edit a team's name and active status
export function updateTeam(formVals, dispatch, props){
	
	const { _id, currently_active, name } = formVals;
	const body = { name, currently_active };
	dispatch({ type: CLOSE_MODAL });
	
	dispatch({ type: CLOSE_MODAL });

	axios.put(`${rootURL}/team/update/${_id}`, body)
		.then((data) => {

			dispatch({type: UPDATE_TEAM, payload: {...formVals, name }});
<<<<<<< 018eaf5ea71c02973b357a4901dcf5be50b3eb5d
=======
			
>>>>>>> merged team tables
		})
		.catch( error => {
			throw new Error(error);
		});
}

//Delete a team from a league
export function removeTeam(team){
	const {_id, currently_active, name } = team;
	const list = currently_active? 'active_teams' : 'archived_teams';
	const teamName = name.replace(/^The/, '');
	dispatch({ type: CLOSE_MODAL });
	

	return function( dispatch ){
		dispatch({ type: CLOSE_MODAL });

		axios.delete(`${rootURL}/team/remove/${_id}`)
			
			.then((data) => dispatch({ type: REMOVE_TEAM, list, payload: _id }))
			.then(() => {
				dispatch({ 
					type: OPEN_SNACKBAR, 
					message: `The ${teamName} have been deleted from your league`,
				});
			});
	};
}
