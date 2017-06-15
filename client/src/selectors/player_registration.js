import { createSelector } from 'reselect';

const getPlayers = state => state.players.list;


export const getPlayerApplications = () => {
	return createSelector(
		[getPlayers],
		players => {

			return players.filter(player => player.team === null);
		});	
};