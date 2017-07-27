import axios from 'axios';
import { UPDATE_PLAYER, UPDATE_TEAM } from '../types';
import { ROOT_URL } from '../../../globals';

export function assignPlayer(form, dispatch) {
	const { playerId, player, team } = form;
	const reqBody = { playerId, team };

	player.teams.push(team);

	axios.put(`${ROOT_URL}/player/assign`, reqBody)
		.then(() => {
			dispatch({
				type: UPDATE_PLAYER,
				updatedPlayer: player
			});

			dispatch({
				type: UPDATE_TEAM,
				newTeam: team.teamId,
				playerId
			});
		});
}
