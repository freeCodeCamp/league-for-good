import React from 'react';
import { cssDashboard } from '../../../style';
import Icon from './staffActions.jsx';

// All staff data passed from the reducers is reformatted here so
// it contains the correct values for the TableTemplate component

// Column headers and data
export const colData = [
	{
		label: 'Email',
		cellProp: 'email',
		sortable: true,
		searchable: true
	},
	{
		label: 'Role',
		cellProp: 'role',
		sortable: true
	},
	{
		label: 'Edit',
		style: cssDashboard.table.columns.icon,
		action: 'edit',
		cellProp: 'icon'

	},
	{
		label: 'Delete',
		style: cssDashboard.table.columns.icon,
		action: 'delete',
		cellProp: 'icon'
	}
];

// Get the value for the cell
function getCellValue(staff, prop, action, leagueId) {

	console.log('staff in staffData', staff);
	if (prop === 'icon') {
		const iconProps = { action, leagueId, staff };
		return <Icon {...iconProps} />;
	}

	// The staff data is passed as an array of strings unlike the teams and
	// players list tables so we just pass the string back for each cell
	// value if it's not a delete icon
	return staff[prop];
}


// Massage the data for the table body
const getStaffTableData = (staff, leagueId) => {
	// map each row
	return staff.map( staffMember => {
		// map each cell
		return colData.map( col => (
			{
				value: getCellValue(staffMember, col.cellProp, col.action, leagueId),
				style: col.style
			}
		));
	});
};

export default getStaffTableData;
