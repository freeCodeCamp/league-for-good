import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoster } from '../../../../actions/index';

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import { css_dashboard } from '../../../style';

// Roster link changes the current state to that renders view
// that contains the roster inside the same panel from PanelViewWrapper
const RosterLink = props => {
	const { fetchRoster, ...team } = props;

	return(
		<Link to={`/dashboard/roster/${team._id}`}>
			<IconButton 
				onTouchTap={() => fetchRoster(team)}
				hoveredStyle={css_dashboard.table.iconHover}
			>
				<ListIcon />
			</IconButton>
		</Link>
	);
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchRoster }, dispatch);
}

export default connect(null, mapDispatchToProps)(RosterLink);
