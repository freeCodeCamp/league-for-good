import React from 'react';
import TableTemplate from '../helper/tableTemplate.jsx';
import Search from './rosterSearch.jsx';

import getRowData, { colData } from './playerData';

const Roster = props => {
	const { teams, roster } = props;
	const title = roster? roster.name : 'Search';
				console.log('teams', teams, 'roster', roster);

	return (
		<div>
			<TableTemplate 
				headers={colData}
				rows={getRowData({teams})}
			/>
		</div>
	);
}

export default Roster;
