import axios from 'axios';
import { FETCH_PLAYER, FETCH_ALL_PLAYERS } from '../types';
import { rootURL } from '../../../globals';



// Get a players info
export function fetchPlayer(player) {
		
	const url = `${rootURL}/player/details/${player._id}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				
				dispatch({type: FETCH_PLAYER, playerDetails: data });
			});
	};
}

// Retrieve all players
export function fetchPlayerList(leagueId){
	
	const url = `${rootURL}/player/list/${leagueId}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => 
				dispatch({type: FETCH_ALL_PLAYERS, playersList: data })
		);
	};
}