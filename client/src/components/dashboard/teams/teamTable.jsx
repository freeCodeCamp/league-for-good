import React from 'react';
import getRowData, { colData } from './teamData';
import TableTemplate from '../../dashboard/templates/table/index.jsx';

// Table that lists all the teams and the ability to edit or delete each team
const TeamTable = props => (
	<TableTemplate 
		title={props.title}
		headers={colData}
		rows={getRowData(props)}
	/>
);

export default TeamTable;
