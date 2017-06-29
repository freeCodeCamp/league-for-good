import React from 'react';
import { css_dashboard } from '../../../style';
import Icon from './seasonActions.jsx';

function formatDate(d) {
	return (d.getMonth() + 1) + ' / ' + d.getDate() + ' / ' + d.getFullYear();
}

// All season data passed from the reducers is reformatted here 

export const colData = [
	{
		label: 'Season',
		cellProp: 'season_name',
		sortable: true,
		searchable: true,
	},
	{
		label: 'Start Date',
		cellProp: 'start_date',
		sortable: true,
	},
	{
		label: 'End Date',
		cellProp: 'end_date',
		sortable: true,
	},
	{
		label: 'Active',
		cellProp: 'active',
		sortable: true,
	},
	{
		label: 'Edit',
		action: 'edit',
		cellProp: 'icon',
		style: css_dashboard.table.columns.icon,
	},
	{
		label: 'Delete',
		action: 'delete',
		cellProp: 'icon',
		style: css_dashboard.table.columns.icon,
	},
];

// Get value for the cell
function getCellValue(season, prop, action) {
	
	if (prop === 'active') {
		return season.active ? 'Active' : 'Archived';
	}
	if (/_date$/.test(prop)) {
		return formatDate(season[prop]);
	}
	if (prop === 'icon') {
		const iconProps = { action, season };
		return <noScript/>;
	}

	return season[prop];
}


// Massaging data
export const getSeasonTableData = seasons => {

	// rows
	return seasons.map( season => {
		// columns
		return colData.map( col => (
			{
				value: getCellValue(season, col.cellProp, col.action),
				colSpan: col.colSpan || 1,
				style: col.style,
			}
		));
	});
};

export default getSeasonTableData;
