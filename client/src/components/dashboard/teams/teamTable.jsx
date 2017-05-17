import React from 'react';
import getRowData, { colData } from './utils/formatTableRows';
import TableTemplate from '../../dashboard/helper/tableTemplate.jsx';


// Table that lists all the teams and the ability to edit or delete each team
const TeamTable  = props => (
	<TableTemplate 
		title={props.title}
		headers={colData}
		rows={getRowData(props)}
	/>
);


export default TeamTable;
