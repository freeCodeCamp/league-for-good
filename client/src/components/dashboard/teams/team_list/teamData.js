import React from 'react';
import { createSelector } from 'reselect';
import { cssDashboard } from '../../../style';
import ModalIcon from '../../../modal/modalLinkIcon.jsx';
import Link from './teamRosterLink.jsx';

const getSeasons = state => state.seasons.list;
const getTeams = state => state.teams;

// All team data passed from the reducers is reformatted here so
// it contains the correct values for the TableTemplate component

// Column headers and data
const colData = [
	{
		label: 'Name',
		cellProp: 'name',
		sortable: true,
		searchable: true,
		colSpan: 2

	},
	{
		label: 'Roster Size',
		cellProp: 'playerCount',
		sortable: true,
		style: cssDashboard.table.columns.defaultCol
	},
	{
		label: 'Seasons',
		cellProp: 'seasonCount',
		sortable: true,
		style: cssDashboard.table.columns.defaultCol
	},
	{
		label: 'Status',
		cellProp: 'status',
		sortable: true,
		style: cssDashboard.table.columns.defaultCol
	},
	{
		label: 'Roster',
		cellProp: 'link'
	},
	{
		label: 'Edit',
		action: 'edit',
		cellProp: 'modal',
		modalView: 'editTeam'
	},
	{
		label: 'Delete',
		action: 'remove',
		cellProp: 'modal',
		modalView: 'removeTeam'
	}
];

// Get the value for the cell
function getCellValue(team, column) {
	const { cellProp, action, modalView } = column;

	if (cellProp === 'modal') {

		const modalData = action === 'remove' ?
			team : { initialValues: team };
		const iconProps = { action, team, modalView, modalData };

		return <ModalIcon {...iconProps} />;

	}
	if (cellProp === 'link') {
		return <Link {...team} />;
	}

	return team[cellProp];
}


// Massage the data to make a table row for each team
const makeTableRow = team => {
		// map each cell
	return colData.map( col => (
		{
			value: getCellValue(team, col),
			colSpan: col.colSpan || 1,
			style: col.style
		}
	));
};

// Loops through each season to get quantity
// of seasons for as well as
// the current or last season played for each team
function getSeasonInfo(seasons) {
	// Track num of seasons per team
	let numOfSeasons = {};
	// If team has active season - map it
	let activeSeasons = {};
	// Map last active season otherwise
	let recentSeasons = {};


	seasons.forEach(({teams, _id, active}) => {

		teams.forEach(team => {

			// Record each occurence of a teamId related to a season

			if (!numOfSeasons.hasOwnProperty(team)) {
				numOfSeasons[team] = 1;
			} else {
				numOfSeasons[team] = numOfSeasons[team] + 1;
			}

			// Check if this specific team has been mapped being in an active
			// season

			if (!activeSeasons[team]) {
				if (active) {
					activeSeasons[team] = _id;
				} else if (!recentSeasons[team]) {
					// Note - the season's list is return from the server
					// sorted by most recent, so we can ensure that the first match
					// for each team id will also be the most recent
					recentSeasons[team] = _id;
				}
			}
		});
	});
	return {
		numOfSeasons,
		activeSeasons,
		recentSeasons
	};
}

// Runs calculations of team and season data
// for the Team List Table
export const configTeamForTable = () => {
	return createSelector(
		[getSeasons, getTeams],
		(seasons = [], teams) => {

			const {
				numOfSeasons,
				activeSeasons,
				recentSeasons
			} = getSeasonInfo(seasons);

			// Format data of each team to coincide with the colData array
			// and run makeTableRow function
			const rows = teams.reduce(
				(list, team) => {

					team.status = team.currentlyActive ? 'Active' : 'Archived';
					team.playerCount = team.players.length;
					team.seasonCount = numOfSeasons[team._id] || 0;
					team.currentSeason = activeSeasons[team._id];
					team.recentSeason = recentSeasons[team._id];

					let row = makeTableRow(team);

					list.push(row);

					return list;
				},
			[]);

		return { rows, headers: colData };

		}
	);
};
