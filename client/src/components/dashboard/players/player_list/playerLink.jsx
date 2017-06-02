import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer } from '../../../../actions/index';
import { css_dashboard } from '../../../style';

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';

const PlayerLink = props => {
	const { ...player } = props;

	return(
		<Link to={`/dashboard/player/${player._id}`}>
			<IconButton hoveredStyle={css_dashboard.table.iconHover}>
				<ListIcon />
			</IconButton>
		</Link>
	);
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerLink);
