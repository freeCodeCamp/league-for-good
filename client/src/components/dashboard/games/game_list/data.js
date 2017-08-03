import React from 'react';
import EditLink from './link.jsx';
import ModalLink from '../../../modal/modalLinkIcon.jsx';
import { createSelector } from 'reselect';


const getCurrSeason = (state, ownProps) =>
	ownProps.location.state.season;

const getGames = state => state.seasons.games;
const getTeams = state => state.teams;
// Properties of each table column
export const colData = [
	{
		label: 'Date',
		cellProp: 'date',
		sortable: true
	},
	{
		label: 'Venue',
		cellProp: 'venue',
		sortable: true
	},
	{
		label: 'Home',
		cellProp: 'homeTeam',
		sortable: true
	},
	{
		label: 'Away',
		cellProp: 'awayTeam',
		sortable: true
	},
	{
		label: 'Edit',
		cellProp: 'link'
	},
	{
		label: 'Delete',
		cellProp: 'modal'
	}
];

function DeleteModal(game, seasonId) {
	return (
		<ModalLink
			action='remove'
			modalData={{game, seasonId}}
			modalView='removeGame'
		/>
	);
}

function getCellVal(game, col, seasonId) {

	if (col.cellProp === 'link') {
		const linkProps = { game };
		return <EditLink {...linkProps}/>;
	} else if (col.cellProp === 'modal') {
		return DeleteModal(game, seasonId);
	} else {
		return game[col.cellProp];
	}
}

export const makeTable = () =>
	createSelector(
		[getCurrSeason, getGames, getTeams],
		(season, games, _teams) => {
			const id = season._id;

			if (!games || !games[id]) {
				return { rows: [], headers: [], season };
			}

			const teams = _teams.reduce((obj, team) => {
				obj[team._id] = team.name;
				return obj;
			}, {});

			const gameList = games[id];

			const rows = gameList.map(game => {
				game.datePlayed = new Date(game.datePlayed);
				game.date = game.datePlayed.toDateString();
				game.awayTeam = teams[game.awayTeamId];
				game.homeTeam = teams[game.homeTeamId];

				return colData.map( col => {
					return {
						value: getCellVal(game, col, id),
						colSpan: col.colSpan || 1,
						style: col.style
					};
				});
			});

			return { rows, headers: colData, season };

		}
	);
