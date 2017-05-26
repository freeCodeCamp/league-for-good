import React from 'react';
import { css_dashboard } from '../../style';

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
];


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
