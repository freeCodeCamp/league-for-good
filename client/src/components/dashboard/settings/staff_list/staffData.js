import React from 'react';
import { css_dashboard } from '../../../style';
import Icon from './staffActions.jsx';

//All staff data passed from the reducers is reformatted here so it contains the correct
//values for the TableTemplate component

// Column headers and data
export const colData = [
	{ 
		label: 'Email',
		cellProp: 'email', 
		sortable: true, 
		searchable: true, 
	},
	{ 
		label: 'Delete', 
		style: css_dashboard.table.columns.icon,
		action: 'delete', 
		cellProp: 'icon', 
	},	
];

// Get the value for the cell
function getCellValue(staff, prop, action) {

	if (prop === 'icon') {
		const iconProps = { action, staff };
		return <Icon {...iconProps} />;
	}
	// The staff data is passed as an array of strings unlike the teams and players list tables.
	return staff;
}
	

// Massage the data for the table body
const getStaffTableData = (staff) => {
	//map each row
	return staff.map( staffMember => {
		//map each cell
		return colData.map( col => (
			{
				value: getCellValue(staffMember, col.cellProp, col.action),
				style: col.style,
			}
		));
	});
};

export default getStaffTableData;
