import React from 'react';
import { css_dashboard } from '../../style';

//All team data passed from the reducers is reformatted here so it contains the correct
//values for the TableTemplate component

// Column headers and data
export const colData = [
	{ 
		label: 'Name',
		style: css_dashboard.table.roster.nameCol,
		cellProp: 'name', 
		sortable: true, 
	},
	{ 
		label: 'Roster Size', 
		style: css_dashboard.table.roster.defaultCol,
		cellProp: 'players.length', 
		sortable: true, 
	},
	{ 
		label: 'Seasons Played', 
		style: css_dashboard.table.roster.defaultCol,
		cellProp: 'seasons.length', 
		sortable: true,
	},
	{ 
		label: 'Status', 
		style: css_dashboard.table.roster.defaultCol,
		cellProp: 'currently_active',
		sortable: true, 
	},
];

// Get the value for the cell
function getCellValue(team, prop, action) {

	if (prop === 'currently_active') {
		return team.currently_active ? 'Active' : 'Not Active';
	}
	// Split properties if cell property is nested
	if (prop.split('.').length > 1) {
		return prop.split('.').reduce((o, i) => o[i], team);
	}
	return team[prop];
}
	

// Massage the data for the table body
const getTeamRosterTableData = ({ teams }) => {
	//map each row
	return teams.map( team => {
		//map each cell
		return colData.map( col => (
			{
				value: getCellValue(team, col.cellProp, col.action),
				style: col.style,
			}
		));
	});
};

export default getTeamRosterTableData;
