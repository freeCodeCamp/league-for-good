import React from 'react';
import { css_dashboard } from '../../../style';
import { get as getObjProp } from 'lodash';
//All player data passed from the reducers is reformatted here so it contains the correct
//values for the TableTemplate component

// Column headers and data
export const colData = [
	{ 
		label: 'Name',
		cellProp: 'full_name', 
		style: css_dashboard.table.columns.primary,
		sortable: true,  
	},	
	{ 
		label: '#', 
		cellProp: 'team.jersey_num', 
		style: css_dashboard.table.columns.secondary,
		sortable: true, 
	},
	{ 
		label: 'Position', 
		cellProp: 'team.position', 
		style: css_dashboard.table.columns.secondary,
		sortable: true,
	},
	{ 
		label: 'Email', 
		style: css_dashboard.table.columns.secondary,
		cellProp: 'email', 
	},
	{ 
		label: 'Phone', 
		style: css_dashboard.table.columns.secondary,
		cellProp: 'phone_num', 
	},
	{
		label: 'Update',
		style: css_dashboard.table.columns.icon,
		cellProp: 'link',
	},
];


// Massage the data for the table body
const getPlayerTableData = (players) => {
	//map each row
	return players.map( player => {
		//map each cell
		return colData.map( ({cellProp, style,  ...col}) => (
			{
				value: getObjProp(player, cellProp),
		       		style: style,
			}
		));
	});
};

export default getPlayerTableData;
