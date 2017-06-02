import React from 'react';
import { css_dashboard } from '../../../style';
import Link from '../../players/player_list/playerLink.jsx';

//All player data passed from the reducers is reformatted here so it contains the correct
//values for the TableTemplate component

// Column headers and data
export const colData = [
	{ 
		label: 'Last Name',
		cellProp: 'last_name', 
		sortable: true,
		searchable: true,
	},
	{
		label: 'First Name',
		cellProp: 'first_name',
		sortable: true,
	},
	{ 
		label: '# of Teams', 
		cellProp: 'teams.length', 
		sortable: true, 
	},
	{
		label: 'View',
		style: css_dashboard.table.roster.iconCol,
		action: 'viewPlayer',
		cellProp: 'link',
	},
];

// Get the value for the cell
function getCellValue(player, prop, action) {
	if (prop === 'link') {
		return <Link {...player} />;
	}
	return player[prop];
}

// Massage the data for the table body
const getPlayerTableData = (players) => {
	//map each row
	return players.map( player => {
		//map each cell
		return colData.map( ({cellProp, action, ...col}) => (
			{
				value: getCellValue(player, cellProp, action),
				
			}
		));
	});
};

export default getPlayerTableData;
