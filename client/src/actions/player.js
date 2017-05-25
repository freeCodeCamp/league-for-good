import axios from 'axios';
import { ADD_PLAYER, UPDATE_TEAM } from './types';
import { rootURL } from '../../globals';

//Add player to DB, 
export function createPlayer(formbody, dispatch, props){
	const { teamIndex, ...inputVals } = formbody;
	const body  = { player: inputVals, league: props.league._id };

	axios.post(`${rootURL}/player/add`, body)
		.then(({data}) => {
			
			//TO-DO build reducer to update player state
			dispatch({ type: ADD_PLAYER });
			
			
			//send newly created player to team if team was selected
			if( teamIndex ){
				teamIndex.players.push(data);
				dispatch({ type: UPDATE_TEAM, payload: teamIndex}) 	
			}	
		});
}

