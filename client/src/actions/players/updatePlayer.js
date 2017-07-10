import axios from 'axios';
import { FETCH_PLAYER, FETCH_ALL_PLAYERS } from '../types';
import { ROOT_URL } from '../../../globals';


export function updatePlayer(form) {
	let { team, teams, ...fields } = form;
	const url = `${ROOT_URL}/player/update/${fields._id}`;
	
	let prevTeam;
	let teamUpdate = null;

	for (let i = 0; i < teams.length; i++) {

		if (teams[i].seasonId === team.seasonId) {
			prevTeam = teams[i].teamId;
			teams[i] = team;
			break;
		}
	}

	const playerUpdate = { ...fields, teams };


	if (prevTeam !== team.teamId) {
		// Team model needs to update
		// console.log('team model needs update', prevTeam.teamId, team.teamId)
		teamUpdate = {
			prevTeam,
			currTeam: team.teamId,
		};
		
	}

	axios.put(url, { playerUpdate, teamUpdate })
		.then(({data}) => { return { type: 'NO TYPE'}; })
		.catch(err => { throw err; });

}
