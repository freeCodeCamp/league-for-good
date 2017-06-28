import React from 'react';
import { Link } from 'react-router-dom';

import { TEAM_ROSTER, makeLinkDynamic } from '../../../routes';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoster } from '../../../../actions/index';

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import { cssDashboard } from '../../../style';

// Roster link changes the current state to that renders view
// that contains the roster inside the same panel from PanelViewWrapper
const RosterLink = props => {
	const { fetchRoster, ...team } = props;
	const url = makeLinkDynamic( TEAM_ROSTER, team._id );
	return (
		<Link to={url}>
			<IconButton
				// onTouchTap={() => fetchRoster(team)}
				hoveredStyle={cssDashboard.table.iconHover}
				>
				<ListIcon />
			</IconButton>
		</Link>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchRoster }, dispatch);
}

export default connect(null, mapDispatchToProps)(RosterLink);
