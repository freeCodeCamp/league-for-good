import axios from 'axios';
import { 
	UPDATE_TEAM, 
	
	ADD_PLAYER_TO_ROSTER,
	ADD_PLAYER_TO_TEAM, 
} from '../types';

import { rootURL } from '../../../globals';

//Flag for updating the currently loaded roster to show the added player
function rosterShouldUpdate( team, roster ){
	return roster && roster._id === team.teamId;
}

export function assignPlayer( form, dispatch, props ) {

	axios.put(`${rootURL}/player/assign`, form)
		.then(({data}) => {
			console.log(data)
		})
		.catch(err => console.error(err))
}