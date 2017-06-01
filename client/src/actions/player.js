import axios from 'axios';
import { ADD_PLAYER, UPDATE_TEAM, FETCH_ROSTER, ADD_PLAYER_TO_ROSTER } from './types';
import { rootURL } from '../../globals';
import { random } from 'lodash';

//Add player to DB, 
export function createPlayer( form, dispatch, props ){
	
	const { team, leagueId, ...player} = form;
	console.log(form);
	// format the request body to match the format of player model
	const reqBody = { ...player, leagues: [leagueId], teams: [team] };

	const roster = props.roster;
	
	
	//Flag for updating the currently loaded roster to show the added player
	const rosterShouldUpdate = roster && team && roster._id === team.teamId;

	axios.post(`${rootURL}/player/add`, reqBody)
		.then(({data}) => {
			
			//TO-DO build reducer to update player state
			// dispatch({ type: ADD_PLAYER });
					
			//send newly created player to team if team was selected
			if ( team && team.teamId ) {
				dispatch({ type: 'ADD_PLAYER_TO_TEAM', 
					payload: { teamId: team.teamId, player: data }, 
				}); 	
			}
			//Update the roster being displayed if the new player was added to that team
			if(rosterShouldUpdate){
				
				const newPlayer = {
					...data,
					full_name:`${data.last_name}, ${data.first_name}`,
					position: team.position,
					jersey_num: team.jersey_num,
				}; 
				dispatch({ type: ADD_PLAYER_TO_ROSTER, newPlayer: newPlayer });
			}	
		});
}

// Get formatted team roster from the server
export function findRoster({ team }, dispatch){
		
	const url = `${rootURL}/team/roster/${team._id}`;
	axios.get(url)
		.then(({data}) => {
			const rosterData = { ...team, players: data };
	
			dispatch({type: FETCH_ROSTER, rosterData });
		});
}
