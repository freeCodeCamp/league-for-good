import axios from 'axios';
import { isEqual, findIndex } from 'lodash';
import { ROOT_URL } from '../../../globals';
import { UPDATE_PLAYER, UPDATE_TEAM } from '../types';

export function updatePlayer(form, dispatch, props) {
	const { originalTeam, team, teams, ...fields } = form;

	let playerRequest = {
		query: { _id: form._id },
		update: { ...fields }
	};

	let teamRequest = {
		shouldUpdate: false,
		currTeam: {},
		newTeam: {}
	};

	if (!isEqual(originalTeam, team)) {

		// Get the current season for the team so the player's team history has
		// a seasonId
		team.seasonId = props.teams.find(t => t._id === team.teamId).seasonId;

		// Player model needs to update 'teams' subdocument
		// so we need to modify the player query + update being sent to server

		playerRequest.query['teams._id'] = team._id;
		playerRequest.update['$set'] = { 'teams.$': team };

		// Team model needs to update, so modify teamRequest object
		teamRequest.currTeam.query = { _id: originalTeam.teamId };
		teamRequest.currTeam.update = { $pull: { players: form._id }};
		teamRequest.newTeam.query = { _id: team.teamId };
		teamRequest.newTeam.update = { $addToSet: { players: form._id }};
		teamRequest.shouldUpdate = true;

		// Replace team in player's team array,
		// so we can show updates on the front end
		let oldIndex = findIndex(teams, { _id: team._id });
		teams.splice(oldIndex, 1, team);
	}

	const requestObj = { player: playerRequest, team: teamRequest };

	axios.put(`${ROOT_URL}/player/update`, requestObj)
		.then(() => {
			dispatch({
				type: UPDATE_PLAYER,
				updatedPlayer: { ...fields, teams }
			});

			if (teamRequest.shouldUpdate) {
				const oldTeam = originalTeam.teamId;
				const newTeam = team.teamId;
				const playerId = form._id;
				const actions = { oldTeam, newTeam, playerId };
				dispatch({ type: UPDATE_TEAM, ...actions });
			}
		})

		.catch(err => { throw err; });

}

