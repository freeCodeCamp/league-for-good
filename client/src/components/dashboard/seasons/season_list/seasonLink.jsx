import React from 'react';
import { Link } from 'react-router-dom';

import { SEASON_CURR_TEAMS, makeLinkDynamic } from '../../../routes';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import { cssDashboard } from '../../../style';

// Roster link changes the current state to that renders view
// that contains the roster inside the same panel from PanelViewWrapper
const SeasonLink = props => {
	const { ...season } = props;
	const url = makeLinkDynamic(SEASON_CURR_TEAMS, season._id );
	return (
		<Link to={url}>
			<IconButton
				hoveredStyle={cssDashboard.table.iconHover}
				>
				<ListIcon />
			</IconButton>
		</Link>
	);
};

export default SeasonLink;
