import axios from 'axios';
import { ADD_PLAYER, UPDATE_TEAM, FETCH_ROSTER, ADD_PLAYER_TO_ROSTER } from './types';
import { rootURL } from '../../globals';
import { random } from 'lodash';

//Add player to DB, 
export function createPlayer(formbody, dispatch, props){
	
	const body  = { player: formbody, league: props.league._id };
	const roster = props.roster;
	const team = formbody.team;
   
  body.player.teams = [{teamId: team}];

	const rosterShouldUpdate = roster && team && roster._id === team._id;

	axios.post(`${rootURL}/player/add`, body)
		.then(({data}) => {
			
			//TO-DO build reducer to update player state
			// dispatch({ type: ADD_PLAYER });
			
			
			//send newly created player to team if team was selected
			if( team ){
				team.players.push(data);
				dispatch({ type: UPDATE_TEAM, payload: team}); 	
			}
			if(rosterShouldUpdate){
				const { _id, first_name, last_name, teams, email, phone_num } = data;
				const { position = 'N/A', jersey_num = random(1,99) } = teams;
				const newPlayer = {
					_id,
					full_name:`${last_name}, ${first_name}`,
					first_name,
					last_name,
					email,
					phone_num,
					position,
					jersey_num,
				} 
				dispatch({ type: ADD_PLAYER_TO_ROSTER, payload: newPlayer });
			}	
		});
}

// Get formatted team roster from the server
export function findRoster({ team }, dispatch){
		
	const url = `${rootURL}/team/roster/${team._id}`;

	axios.get(url)
		.then(({data}) => {
			const payload = { ...team, players: data };
			
			dispatch({type: FETCH_ROSTER, payload });
		});
}