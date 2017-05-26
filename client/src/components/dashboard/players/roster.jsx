import React from 'react';
import Table from '../helper/tableTemplate.jsx';
import Search from './rosterSearch.jsx';

import parseRowData, { colData } from './playerData';

const Roster = props => {
	const { teams, roster } = props;
	const title = roster? roster.name : 'Search';

	return(
		<div>
			<Search 
				title={title}
				teams={teams}
			/>
			{
				roster && 
					<Table 
						hideSearchInput={true}
						headers={colData}
						rows={parseRowData(roster.players)}
					/>
			}
		</div>
	)
}

export default Roster;