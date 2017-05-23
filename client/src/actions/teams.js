// User actions to add, edit, and delete teams in the league
import axios from 'axios';
import { CREATE_TEAM, REMOVE_TEAM, SELECT_TEAMS, OPEN_SNACKBAR, CLOSE_MODAL } from './types';
import { rootURL } from '../../globals';

////////////////////////////////////////////////////////////
//TEMPORARY, This logic will be handled on the backend
function capitalizeWord(acc, val, index){
	const padding = index > 0 ? ' ' : '';
	return acc + padding + val.charAt(0).toUpperCase() + val.slice(1);
}


//Capitalize the first letter in each word of a string
const toTitleCase = function(str){
	const words = str.split(' ');
	
	return words.reduce(capitalizeWord , '');
};
///////////////////////////////////////////////////////////////


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
	const name = toTitleCase(formVals.name);
	const { _id, currently_active } = formVals;
	const body = { name, currently_active };
	
	axios.put(`${rootURL}/team/update/${_id}`, body)
		.then((data) => {
			dispatch({type: 'reducer_not_ready'});
			dispatch({ type: CLOSE_MODAL });
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
	
	return function( dispatch ){
		
		axios.delete(`${rootURL}/team/remove/${_id}`)
			.then((data) => {
				dispatch({ type: REMOVE_TEAM, list, payload: _id }); 
				return dispatch({ type: CLOSE_MODAL });
			})
			.then(() => {
				dispatch({ 
					type: OPEN_SNACKBAR, 
					message: `The ${teamName} have been deleted from your league`,
				});
			});
	};
}
