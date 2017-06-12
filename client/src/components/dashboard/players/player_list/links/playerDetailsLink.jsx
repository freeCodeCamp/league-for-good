import React from 'react';
import { Link } from 'react-router-dom';

import { PLAYER_DETAIL, makeLinkDynamic } from '../../../../routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer } from '../../../../../actions/index';
import { css_dashboard } from '../../../../style';

import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';

const PlayerLink = props => {
	const { fetchPlayer, ...player } = props;
	
	const playerUrl = makeLinkDynamic( PLAYER_DETAIL, player._id );
	
	return(
		<div onClick={() => fetchPlayer(player)}>
			<Link to={playerUrl}>
				<IconButton hoveredStyle={css_dashboard.table.iconHover}>
					<ListIcon />
				</IconButton>
			</Link>
		</div>
	);
};


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerLink);