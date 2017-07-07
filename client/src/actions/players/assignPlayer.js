import axios from 'axios';
import { ADD_PLAYER_TO_TEAM } from '../types';
import { rootURL } from '../../../globals';

export function assignPlayer(form, dispatch) {

	const { playerId, ...team } = form;
	const { teamId } = team;
	const reqBody = { playerId, team };

	if (!playerId || !teamId ) {return;}

	axios.put(`${rootURL}/player/assign`, reqBody)
		.then(() => {
			dispatch({
				type: ADD_PLAYER_TO_TEAM,
				payload: { player: playerId, teamId }
			});
		});
}
