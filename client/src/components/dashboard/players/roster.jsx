import React from 'react';
import TableTemplate from '../helper/tableTemplate.jsx';
import Search from './rosterSearch.jsx';
import { css_content } from '../../style';

import getRowData, { colData } from './playerData';

const Roster = props => {
	const { teams, roster } = props;
	const title = roster ? roster.name : 'Search';
	console.log('teams', teams);
	console.log('roster', roster);

	return (
		<div style={css_content.body}>
			<TableTemplate 
				headers={colData}
				rows={getRowData({teams})}
			/>
		</div>
	);
}

export default Roster;
