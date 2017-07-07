import React from 'react';
import { cssDashboard } from '../../../style';
import Icon from './teamActions.jsx';
import Link from './teamRosterLink.jsx';

// All team data passed from the reducers is reformatted here so
// it contains the correct values for the TableTemplate component

// Column headers and data
export const colData = [
	{
		label: 'Name',
		cellProp: 'name',
		sortable: true,
		searchable: true,
		colSpan: 2

	},
	{
		label: 'Roster Size',
		cellProp: 'players.length',
		sortable: true,
		style: cssDashboard.table.columns.defaultCol
	},
	{
		label: 'Seasons',
		cellProp: 'seasons.length',
		sortable: true,
		style: cssDashboard.table.columns.defaultCol
	},
	{
		label: 'Status',
		cellProp: 'currentlyActive',
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
		cellProp: 'icon'
	},
	{
		label: 'Delete',
		action: 'delete',
		cellProp: 'icon'
	}
];

// Get the value for the cell
function getCellValue(team, prop, action) {

	if (prop === 'currentlyActive') {
		return team.currentlyActive ? 'Active' : 'Archived';
	}
	if (prop === 'icon') {
		const iconProps = { action, team };
		return <Icon {...iconProps} />;
	}
	if (prop === 'link') {
		return <Link {...team} />;
	}
	// Split properties if cell property is nested
	if (prop.split('.').length > 1) {
		return prop.split('.').reduce((o, i) => o[i], team);
	}
	return team[prop];
}


// Massage the data for the table body
const getTeamTableData = ({ teams }) => {
	// map each row
	return teams.map( team => {
		// map each cell
		return colData.map( col => (
			{
				value: getCellValue(team, col.cellProp, col.action),
				colSpan: col.colSpan || 1,
				style: col.style,
			}
		));
	});
};

export default getTeamTableData;
