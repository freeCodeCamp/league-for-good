import { createSelector } from 'reselect';

const getSeasons = state => state.seasons.list;
const getTeams = state => state.teams;

function getSeasonCount(seasons) {
	let numOfSeasons = {};

	seasons.forEach(({teams}) => {
		teams.forEach(team => {
			if (!numOfSeasons.hasOwnProperty(team)) {
				numOfSeasons[team] = 1;
			} else {
				numOfSeasons[team] = numOfSeasons[team] + 1;
			}
		});
	});
	return numOfSeasons;
}

export const configTeamForTable = () => {
	return createSelector(
		[getSeasons, getTeams],
		(seasons = [], teams) => {

			const seasonsPerTeam = getSeasonCount(seasons);

			return teams.reduce((list, team) => {

				team.status = team.currentlyActive ? 'Active' : 'Archived';
				team.playerCount = team.players.length;
				team.seasonCount = seasonsPerTeam[team._id] || 0;

				list.push(team);
				return list;
			}, []);
		}
	);
};
