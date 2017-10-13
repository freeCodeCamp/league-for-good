import React from 'react';
import { createSelector } from 'reselect';
import { cssDashboard } from '../../../styles';

import ModalLink from '../../../modal/modalLinkIcon.jsx';
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
		label: 'Approve',
		style: cssDashboard.table.columns.icon,
		action: 'checkCircle',
		cellProp: 'modal',
		modalView: 'approvePlayerApplication'
	},
	{
		label: 'Delete',
		style: cssDashboard.table.columns.icon,
		cellProp: 'modal',
		action: 'remove',
		modalView: 'removePlayerApplication'
	}
];


// Get the value for the cell
function getCellValue(player, colValues ) {
	const { cellProp, action, modalView } = colValues;

	if (cellProp === 'link') {
		return <Link player={player} />;
	}	else if (cellProp === 'modal') {
		const modalProps = { action, modalView, modalData: { player }};
		return <ModalLink {...modalProps} />;
	} else {
		return getObjProp(player, cellProp);
	}


}

// Massage the data for the table row
const makeTableRow = player => {
		// map each cell
	return colData.map( ({style, ...colValues}) => (
		{
			value: getCellValue(player, colValues),
			style
		}
	));
};

const getPlayers = state => state.players.list;

export const getPlayerRegistrations = () =>
	createSelector(
		[getPlayers],
		(playerList) => {
			const rows = [];

			playerList.forEach(player => {
				if (player.pending) {
					const playerRowData = makeTableRow(player);
					rows.push(playerRowData);
				}
			});

			return { headers: colData, rows };
		}
	);


