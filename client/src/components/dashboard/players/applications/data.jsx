import React from 'react';
import { cssDashboard } from '../../../style';

import ModalLinks from './links/modalLink.jsx';
import Link from './links/playerRegLink.jsx';
import { get as getObjProp } from 'lodash';
// All player data passed from the reducers is reformatted here so
// it contains the correct values for the TableTemplate component

// Column headers and data
export const colData = [
	{
		label: 'Last Name',
		cellProp: 'lastName',
		sortable: true,
		searchable: true
	},
	{
		label: 'First Name',
		cellProp: 'firstName',
		sortable: true
	},
	{
		label: 'Email',
		cellProp: 'email',
		sortable: true
	},
	{
		label: 'Phone Number',
		cellProp: 'phoneNum'
	},
	{
		label: 'View',
		style: cssDashboard.table.columns.icon,
		cellProp: 'link'
	},
	{
		label: 'Assign',
		style: cssDashboard.table.columns.icon,
		action: 'assign',
		cellProp: 'modal'
	},
	{
		label: 'Delete',
		style: cssDashboard.table.columns.icon,
		cellProp: 'modal',
		action: 'delete'
	}
];


// Get the value for the cell
function getCellValue(player, colValues, leagueId ) {
	const { cellProp, action } = colValues;

	if (cellProp !== 'link' && cellProp !== 'modal') {
		return getObjProp(player, cellProp);
	}	else if (cellProp === 'modal') {
		const modalProps = { action, player, leagueId };
		return <ModalLinks {...modalProps} />;
	}

	return <Link player={player} />;

}

// Massage the data for the table body
const getPlayerTableData = (players, leagueId) => {
	// map each row
	return players.map( player => {
		// map each cell
		return colData.map( ({style, ...colValues}) => (
			{
				value: getCellValue(player, colValues, leagueId),
				style
			}
		));
	});
};

export default getPlayerTableData;
