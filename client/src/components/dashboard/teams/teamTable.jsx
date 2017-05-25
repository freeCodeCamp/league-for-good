import React from 'react';
import getRowData, { colData } from './teamData';
import { css_content } from '../../style';
import TableTemplate from '../helper/tableTemplate.jsx';

// Table that lists all the teams and the ability to edit or delete each team
const TeamTable = props => (
	<div style={css_content.body}>
		<TableTemplate 
			title={props.title}
			headers={colData}
			rows={getRowData(props)}
		/>
	</div>
);

export default TeamTable;
