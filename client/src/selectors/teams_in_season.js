import { createSelector } from 'reselect';

const getSeasons = state => state.seasons.list;
const getTeams = state => state.teams;


export const configTeamForTable = () => {
	return createSelector(
		[getSeasons, getTeams],
		(seasons = [], teams) => {
			// const activeSeasons = seasons.filter(season => season.active);


			return teams.reduce((list, team) => {
				// team.activeSeason = activeSeasons.find(season => season.teams.includes(team._id))

				// if (team.activeSeason && team.currently_active) {
				// 	team.activeSeason = team.activeSeason.seasonName;
				// }
				// else{
				// 	team.activeSeason = 'N/A'
				// }
				team.status = team.currently_active ? 'Active' : 'Archived';
				team.playerCount = team.players.length;
				list.push(team);
				return list;
			}, []);

		}
	);
};
