import React from 'react';
import Icon from './getIcon.jsx';
import { containerCSS, titleCSS } from '../../dashboardCSS';

//All team data passed from the reducers is reformatted here so it contains the correct
//values for the TableTemplate component

const style = {
	nameCol: {
		width: '30%',
		textAlign: 'left',
	},
	defaultCol: {
		width: '20%',
		textAlign: 'left',
	},
	iconCol: {
		width: '10%',
		textAlign: 'right',
	},
};

	// Column headers and data
export const colData = [
		{ label: 'Name', style: style.nameCol, cellProp: 'name', sortable: true, searchable: false },
		{ label: 'Roster Size', style: style.defaultCol, cellProp: 'players.length', sortable: true },
		{ label: 'Seasons Played', style: style.defaultCol, cellProp: 'seasons.length', sortable: true },
		{ label: 'Status', style: style.defaultCol, cellProp: 'currently_active' },
		{ label: '', style: style.iconCol, cellProp: 'icon' },
];

	// Get the value for the cell
function getCellValue(team, prop, action) {
	if (prop === 'currently_active') {
		return team.currently_active ? 'Active' : 'Not Active';
	}
	if (prop === 'icon') {
		const iconProps = { action, team };
		return <Icon {...iconProps}/>;
	}
	// Split properties if cell property is nested
	if (prop.split('.').length > 1) {
		return prop.split('.').reduce((o, i) => o[i], team);
	}
	return team[prop];
}			
	
	
	// Massage the data for the table body
const getTableData = ({teams, action}) => {
	//map each row
	return teams.map( team => {
		//map each cell
		return colData.map( col => (
			{
				value: getCellValue(team, col.cellProp, action),
				style: col.style,
			}
		));
	});
};

export default getTableData;
