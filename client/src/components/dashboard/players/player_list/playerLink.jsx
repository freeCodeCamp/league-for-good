import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer } from '../../../../actions/index';

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';

const PlayerLink = props => {
	const { ...player } = props;

	return(
		<Link to={`/dashboard/player/${player._id}`}>
			<IconButton>
				<ListIcon />
			</IconButton>
		</Link>
	);
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerLink);
