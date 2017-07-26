import { createSelector } from 'reselect';
import { get as getObjProp } from 'lodash';
// All player data passed from the reducers is reformatted here so
// it contains the correct values for the TableTemplate component

const getPlayers = state => state.players.list;

const getSelectedTeam = (state, props) => props.location.state.team;

// Column headers and data
const colData = [
	{
		label: 'Name',
		cellProp: 'fullName',
		sortable: true
	},
	{
		label: '#',
		cellProp: 'team.jerseyNum',
		sortable: true
	},
	{
		label: 'Position',
		cellProp: 'team.position',
		sortable: true
	},
	{
		label: 'Email',
		cellProp: 'email'
	},
	{
		label: 'Phone',
		cellProp: 'phoneNum'
	},
	{
		label: 'Update',
		cellProp: 'link'
	}
];


// Create a table row from a player's data;
const getTableRow = player =>
	// map each cell
	colData.map( col => (
		{ value: getObjProp(player, col.cellProp) }
	));


export const getRoster = () => {
	return createSelector(
		[getPlayers, getSelectedTeam],
		(players, team) => {
			const roster = { ...team };
			const seasonId = roster.currentSeason ?
				roster.currentSeason : roster.recentSeason;

			roster.headers = colData;

			roster.players = team.players.reduce((playerList, playerId) => {

				const player = players.find(({_id}) => _id === playerId);

				if (player) {
					// Get correct object from array of player's team history
					player.team = player.teams.find(t => t.seasonId === seasonId);
					// Push formatted player data of table row to playerslist array
					playerList.push(
						getTableRow(player)
					);
				}

				return playerList;
			}, []);

			return roster;
		}
	);
};


