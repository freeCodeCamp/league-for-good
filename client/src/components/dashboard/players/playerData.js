import React from 'react';
import { css_dashboard } from '../../style';
import TableIcon from '../helper/tableIcon.jsx';

//All player data passed from the reducers is reformatted here so it contains the correct
//values for the TableTemplate component

// Column headers and data
export const colData = [
	{ 
		label: 'Name',
		cellProp: 'full_name', 
		sortable: true,  
	},	
	{ 
		label: '#', 
		cellProp: 'jersey_num', 
		sortable: true, 
	},
	{ 
		label: 'Position', 
		cellProp: 'position', 
		sortable: true,
	},
	{ 
		label: 'Email', 
		cellProp: 'email', 
	},
	{ 
		label: 'Phone', 
		cellProp: 'phone_num', 
	},
	{
		label: 'View',
		style: css_dashboard.table.roster.iconCol,
		action: 'viewRoster',
		cellProp: 'icon',
	},
];

<<<<<<< HEAD
// Get the value for the cell
function getCellValue(team, prop, action) {
	if (prop === 'currently_active') {
		return team.currently_active ? 'Active' : 'Archived';
	}
	if (prop === 'icon') {
		const iconProps = { action, team };
		return <TableIcon {...iconProps} />;
	}
	// Split properties if cell property is nested
	if (prop.split('.').length > 1) {
		return prop.split('.').reduce((o, i) => o[i], team);
	}
	return team[prop];
}
	
=======
>>>>>>> 5ef34d1feda2f07bc9a84686734717b7648aef99

// Massage the data for the table body
const getPlayerTableData = (players) => {
	//map each row
	return players.map( player => {
		//map each cell
		return colData.map( ({cellProp, ...col}) => (
			{
				value: player[cellProp],
				
			}
		));
	});
};

export default getPlayerTableData;
