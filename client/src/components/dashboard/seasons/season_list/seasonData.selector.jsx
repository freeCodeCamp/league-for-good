import React from 'react';
import { cssDashboard } from '../../../styles';
import Icon from '../../../modal/modalLinkIcon.jsx';
import SeasonLink from './seasonLink.jsx';
import { createSelector } from 'reselect';


const getSeasons = state => state.seasons.list;
const getTeams = state => state.teams;
const getCurrSeasonId = (state, ownProps) =>
	ownProps.match.params.seasonId;

const getReactRouter = (state, props) => props.history;

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
		cellProp: 'start',
		sortable: true
	},
	{
		label: 'End Date',
		cellProp: 'end',
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
		action: 'teams',
		style: cssDashboard.table.columns.icon
	},
	{
		label: 'Games',
		cellProp: 'link',
		action: 'games',
		style: cssDashboard.table.columns.icon
	},
	{
		label: 'Edit',
		action: 'edit',
		cellProp: 'modal',
		style: cssDashboard.table.columns.icon,
		modalView: 'editSeason'
	},
	{
		label: 'Delete',
		action: 'remove',
		cellProp: 'modal',
		style: cssDashboard.table.columns.icon,
		modalView: 'removeSeason'
	}
];


function getCellValue(season, column, history) {
	const { cellProp, action, modalView } = column;

	if (cellProp === 'modal') {
		const modalData = action === 'edit' ?
			{ initialValues: season } : season;
		const iconProps = { action, season, modalView, modalData };
		return <Icon {...iconProps} />;

	} else if (cellProp === 'link') {
		const linkProps = { history, season, action };
		return <SeasonLink {...linkProps}/>;
	} else {
		return season[cellProp];
	}


}


function makeSeasonRow(history) {

	return function(season) {
		season.active = season.active ? 'Active' : 'Not Active';
		season.start = formatDate(season.startDate);
		season.end = formatDate(season.endDate);

		return colData.map(col => (
			{
				value: getCellValue(season, col, history),
				colSpan: col.colSpan || 1,
				style: col.style
			}
		));
	};
}


export const configSeasonForTable = () =>
	createSelector(
		[getSeasons, getReactRouter],
		(seasons, history) => {
			const makeRow = makeSeasonRow(history);
			return (
				{
					rows: seasons.map(makeRow),
					headers: colData
				}
			);
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
