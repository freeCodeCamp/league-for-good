import axios from 'axios';
import { 
	ADD_PLAYER, 
	UPDATE_TEAM, 
	FETCH_ROSTER,
	ADD_PLAYER_TO_ROSTER,
	ADD_PLAYER_TO_TEAM 
} from '../types';

import { rootURL } from '../../../globals';

//Flag for updating the currently loaded roster to show the added player
function rosterShouldUpdate({ form: { team }}, _, { roster }){
	return roster && team && roster._id === team.teamId;
}



//Add a new player to DB, 
export function createPlayer( form, dispatch, props ) {
	
	
	const { team, leagueId, ...player } = form;
	// format the request body to match the format of player model
	const reqBody = { ...player, leagues: [leagueId], teams: [team] };

	axios.post(`${rootURL}/player/add`, reqBody)
		.then(({data}) => {
			
			//TO-DO build reducer to update player state
			// dispatch({ type: ADD_PLAYER });
					
			//send newly created player to team if team was selected
			if ( team && team.teamId ) {
				dispatch({ type: ADD_PLAYER_TO_TEAM, 
					payload: { teamId: team.teamId, player: data }, 
				}); 	
			}
			
			//Update the roster being displayed if the new player was added to that team
			if(rosterShouldUpdate(form, null, props)){
				//Format the player data to be compatible with the roster
				const newPlayer = {
					...data,
					full_name:`${data.last_name}, ${data.first_name}`,
					position: team.position,
					jersey_num: team.jersey_num,
				}; 
				
				dispatch({ type: ADD_PLAYER_TO_ROSTER, payload: newPlayer });
			}	
		});
}