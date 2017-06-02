import axios from 'axios';
import { FETCH_PLAYER } from '../types';
import { rootURL } from '../../../globals';



// Get formatted team roster from the server
export function fetchPlayer(team){
		
	const url = `${rootURL}/player/${player._id}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				console.log('fetch player', data);
				
				const playerData = { ...data };
				dispatch({type: FETCH_PLAYER, playerData });
		});
	}

}
