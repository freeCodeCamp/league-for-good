import { createSelector } from 'reselect';


const getPlayers = state => state.players.list;
const getLeagueId = state => state.league.selected;
const getSeasons = state => state.seasons.list;
const getTeams = state => state.teams;
const getPlayerId = (state, ownProps) =>
	ownProps.playerId;

/*
	Filter out any teams without an active season and
	add a seasonId field to each remaining team object
	so the player-form can attach the correct season info to
	the player
*/
const getCurrTeams = createSelector(
		[getTeams, getSeasons],
		(teams, seasons) => {
			let activeSeasons = {};

			seasons.forEach(season => {
				if (season.active) {
					season.teams.forEach(team => {
						activeSeasons[team] = season._id;
					});
				}
			});

			return teams.reduce((arr, team) => {
				if (activeSeasons[team._id]) {
					team.seasonId = activeSeasons[team._id];
					arr.push(team);
				}
				return arr;
			}, []);
		}
	);

const getPlayersCurrTeam = (player, currTeams) => {
	let res;
	player.teams.forEach(team => {

		let currTeamData = currTeams.find(t => t._id === team.teamId);

		if (currTeamData && currTeamData.seasonId === team.seasonId) {
			team.seasonId = currTeamData.seasonId;
		}
		res = team;
	});

	return res;
};

const getCurrPlayer = createSelector(
		[getPlayers, getPlayerId, getCurrTeams],
		(players, playerId, currTeams) => {
			if (playerId) {
				let player = players.find(({_id}) => playerId === _id);

				player.team = getPlayersCurrTeam(player, currTeams);

				// For tracking whether a player's team value is updated
				player.originalTeam = ({...player.team});
				return player;

			} else {
				return null;
			}
		}
	);

export const getFormVals = () =>
	createSelector(
		[getCurrPlayer, getCurrTeams, getLeagueId],
		(player, teams, leagueId) => {
			let initialValues = { leagueId };

			if (player) {
				initialValues = { leagueId, ...player};
			}

			return {
				initialValues,
				teams
			};
		}
	);

export const getAssignFormVals = () =>
	createSelector(
		[getCurrTeams, getLeagueId, getPlayers],
		(teams, leagueId, players) => {

			return {
				initialValues: { leagueId },
				players,
				teams: teams.filter(t => t.currentlyActive)
			};
		}
	);

