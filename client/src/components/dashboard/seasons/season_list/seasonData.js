import React from 'react';
import { cssDashboard } from '../../../style';
import Icon from './seasonActions.jsx';

const formatDate = date => 
	new Date(date).toDateString().replace(/^\w*\s/, '');

// All season data passed from the reducers is reformatted here 

export const colData = [
	{
		label: 'Season',
		cellProp: 'name',
		sortable: true,
		searchable: true,
	},
	{
		label: 'Start Date',
		cellProp: 'startDate',
		sortable: true,
	},
	{
		label: 'End Date',
		cellProp: 'endDate',
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
		style: cssDashboard.table.columns.icon,
	},
	{
		label: 'Delete',
		action: 'delete',
		cellProp: 'icon',
		style: cssDashboard.table.columns.icon,
	},
];


// Get value for the cell
function getCellValue(season, prop, action) {
	
	if (prop === 'active') {
		return season.active ? 'Active' : 'Archived';
	} else if (/Date$/.test(prop)) {
		return formatDate(season[prop]); 
	} else if (prop === 'icon') {
		const iconProps = { action, season };
		return <Icon {...iconProps}/>;
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
