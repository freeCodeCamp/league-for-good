import axios from 'axios';
import { FETCH_PLAYER } from '../types';
import { rootURL } from '../../../globals';



// Get a players info
export function fetchPlayer() {
		
	const url = `${rootURL}/player/${player._id}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				console.log('fetch player', data);
				
				const playerData = { ...data };
				dispatch({type: FETCH_PLAYER, playerData });
		});
	};
}

// Retrieve all players
export function fetchAllPlayers() {
	const url = `${rootURL}/getAllPlayers`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				
				const playersData = { ...data };
				dispatch({ type: FETCH_ALL_PLAYERS, playersData });
		});
	};
}
