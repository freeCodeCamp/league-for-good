import { createSelector } from 'reselect';

const getPlayers = state => state.players.list;

const getSelectedTeam = (state, props) => {
	const { match: { params: { teamId }}} = props;

	return state.teams.find( ({_id}) => _id === teamId);
};


export const getRoster = () => {
	return createSelector(
		[getPlayers, getSelectedTeam],
		(players, team) => {
			const roster = { ...team };

			roster.players = team.players.reduce((playerList, playerId) => {

				const player = players.find(({_id}) => _id === playerId);

				if (player) {
					playerList.push(player);
				}

				return playerList;
			}, []);

			return roster;
		}
	);
};
