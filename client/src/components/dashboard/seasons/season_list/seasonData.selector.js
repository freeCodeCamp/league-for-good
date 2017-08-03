import React from 'react';
import { cssDashboard } from '../../../style';
import Icon from './seasonActions.jsx';
import SeasonLink from './seasonLink.jsx';
import { createSelector } from 'reselect';


const getSeasons = state => state.seasons.list;
const getTeams = state => state.teams;
const getCurrSeasonId = (state, ownProps) =>
	ownProps.match.params.seasonId;

const formatDate = date =>
	new Date(date).toDateString().replace(/^\w*\s/, '');

// Properties of each table column
export const colData = [
	{
		label: 'Season',
		cellProp: 'name',
		sortable: true,
		searchable: true
	},
	{
		label: 'Start Date',
		cellProp: 'startDate',
		sortable: true
	},
	{
		label: 'End Date',
		cellProp: 'endDate',
		sortable: true
	},
	{
		label: 'Active',
		cellProp: 'active',
		sortable: true
	},
	{
		label: 'Teams',
		cellProp: 'link',
		style: cssDashboard.table.columns.icon
	},
	{
		label: 'Edit',
		action: 'edit',
		cellProp: 'icon',
		style: cssDashboard.table.columns.icon,
		permission: 'editSeason'
	},
	{
		label: 'Delete',
		action: 'delete',
		cellProp: 'icon',
		style: cssDashboard.table.columns.icon,
		permission: 'deleteSeason'
	}
];


// Get value for the cell
function getCellValue(season, prop, action) {

	if (prop === 'active') {
		return season.active ? 'Active' : 'Not Active';
	} else if (/Date$/.test(prop)) {
		return formatDate(season[prop]);
	} else if (prop === 'icon') {
		const iconProps = { action, season };
		return <Icon {...iconProps} />;
	} else if (prop === 'link') {
		return <SeasonLink {...season} />;
	}

	return season[prop];
}


// Massaging data
const getSeasonTableData = seasons => {

	// rows
	return seasons.map( season =>
		// columns
		colData.map( col => (
			{
				value: getCellValue(season, col.cellProp, col.action),
				colSpan: col.colSpan || 1,
				style: col.style
			}
		))
	);
};


export const configSeasonForTable = () =>
	createSelector(
		[getSeasons],
		(seasons) => {
			return {
				seasons: getSeasonTableData(seasons),
				headers: colData
			};
		}
	);

export const currTeamsSelector = () =>
	createSelector(
		[getSeasons, getCurrSeasonId, getTeams],
		(seasons, seasonId, allTeams) => {
			const currSeason = seasons.find(s => s._id === seasonId);
			const { startDate, endDate, teams, name } = currSeason;
			const range = `${formatDate(startDate)} - ${formatDate(endDate)}`;

			// format the initialValues property for reduxForm
			// the key is the teamId and the value is a boolean
			// for whether the team is currently apart of the season
			const initialValues = {};


			// Create an array of all active teams
			const teamList = allTeams.reduce(
				(arr, {_id, name, currentlyActive}) => {
					// filter out archived teams
					if (currentlyActive) {
						// update the initialValues object
						initialValues[_id] = teams.includes(_id);

						arr.push({ _id, name });
					}
					return arr;
				}, []);

			return { name, range, teamList, initialValues, currSeason };
		}
	);
