import axios from 'axios';
import { ADD_PLAYER, ADD_PLAYER_TO_TEAM } from '../types';
import { rootURL } from '../../../globals';


//Add a new player to DB, 
export function createPlayer(form, dispatch, { location: { state }}) {
	
	
	const { team, ...player } = form;
	const leagues = [ state.leagueId ];

	// format the request body to match the format of player model
	const reqBody = { ...player, leagues, teams: [team] };
	
	axios.post(`${rootURL}/player/add`, reqBody)
		.then(({data}) => {
	
			//Send new player to the playersReducer to be appended to the list
			dispatch({ type: ADD_PLAYER, payload: data });
					
			//send newly created player to team if team was selected
			if ( team && team.teamId ) {
				dispatch({ 
					type: ADD_PLAYER_TO_TEAM, 
					payload: { teamId: team.teamId, player: data }, 
				}); 	
			}

		});
}