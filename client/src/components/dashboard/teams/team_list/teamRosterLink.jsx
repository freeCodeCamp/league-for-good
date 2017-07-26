import React from 'react';
import { Link } from 'react-router-dom';

import { TEAM_ROSTER, makeLinkDynamic } from '../../../routes';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import { cssDashboard } from '../../../style';

// Roster link changes the current state to that renders view
// that contains the roster inside the same panel from PanelViewWrapper
const RosterLink = team => {

	const url = makeLinkDynamic( TEAM_ROSTER, team._id );
	const state = { team };

	return (
		<Link to={{ pathname: url, state }}>
			<IconButton
				hoveredStyle={cssDashboard.table.iconHover}
				>
				<ListIcon />
			</IconButton>
		</Link>
	);
};


export default RosterLink;
