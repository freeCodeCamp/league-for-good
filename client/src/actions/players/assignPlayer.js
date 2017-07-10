import axios from 'axios';
import { ADD_PLAYER_TO_TEAM } from '../types';
import { ROOT_URL } from '../../../globals';

export function assignPlayer(form, dispatch) {

	const { playerId, ...team } = form;
	const { teamId } = team;
	const reqBody = { playerId, team };

	if (!playerId || !teamId ) {return;}

	axios.put(`${ROOT_URL}/player/assign`, reqBody)
		.then(() => {
			dispatch({
				type: ADD_PLAYER_TO_TEAM,
				payload: { player: playerId, teamId },
			});
		});
}
