import React from 'react';
import { Link } from 'react-router-dom';

import { PLAYER_REGISTRATION_DETAILS as url, makeLinkDynamic } from '../../../routes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlayer } from '../../../../actions/index';
import { css_dashboard } from '../../../style';

import IconButton from 'material-ui/IconButton';
import ProfileIcon from 'material-ui/svg-icons/action/account-box';

const PlayerLink = props => {
	const { fetchPlayer, player } = props;
	console.log('player link', player);
	const playerUrl = makeLinkDynamic( url, player._id );
	
	return(
		<div onClick={() => fetchPlayer(player)}>
			<Link to={playerUrl}>
				<IconButton hoveredStyle={css_dashboard.table.iconHover}>
					<ProfileIcon />
				</IconButton>
			</Link>
		</div>
	);
};


function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchPlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerLink);
