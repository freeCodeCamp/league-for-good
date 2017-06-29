import axios from 'axios';
import { FETCH_PLAYER, FETCH_ALL_PLAYERS } from '../types';
import { ROOT_URL } from '../../../globals';



// Get more detailed player info including stats
export function fetchPlayer(player) {
		
	const url = `${ROOT_URL}/player/details/${player._id}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				
				dispatch({type: FETCH_PLAYER, playerDetails: data });
			});
	};
}

// Retrieve all players
export function fetchPlayerList(leagueId){
	
	const url = `${ROOT_URL}/player/list/${leagueId}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => 
				dispatch({type: FETCH_ALL_PLAYERS, playersList: data })
		);
	};
}