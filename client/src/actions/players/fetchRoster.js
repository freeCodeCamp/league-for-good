import axios from 'axios';
import { FETCH_ROSTER } from '../types';
import { rootURL } from '../../../globals';



// Get formatted team roster from the server
export function fetchRoster(team){
		
	const url = `${rootURL}/team/roster/${team._id}`;
	
	return dispatch => {
		axios.get(url)
			.then(({data}) => {
				
				const payload = { ...team, players: data };
				dispatch({type: FETCH_ROSTER, payload });
		});
	}

}
