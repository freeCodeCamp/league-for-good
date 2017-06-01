import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRoster } from '../../../actions/index';

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';

const RosterLink = props => {
	const { fetchRoster, ...team } = props;

	return(
		<Link to={`/dashboard/roster/${team._id}`}>
			<IconButton onTouchTap={() => fetchRoster(team)}>
				<ListIcon/>
			</IconButton>
		</Link>
	);
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchRoster }, dispatch);
}

export default connect(null, mapDispatchToProps)(RosterLink);