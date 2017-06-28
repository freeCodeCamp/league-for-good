import React from 'react';
import { Link } from 'react-router-dom';

import {
	PLAYER_REGISTRATION_DETAILS as url,
	makeLinkDynamic
} from '../../../../routes';
import { cssDashboard } from '../../../../style';

import IconButton from 'material-ui/IconButton';
import ProfileIcon from 'material-ui/svg-icons/action/account-box';

const PlayerLink = props => {
	const { player } = props;

	const playerUrl = {
		pathname: makeLinkDynamic( url, player._id ),
		state: { player }
	};

	return (
		<Link to={playerUrl}>
			<IconButton hoveredStyle={cssDashboard.table.iconHover}>
				<ProfileIcon />
			</IconButton>
		</Link>
	);
};

export default PlayerLink;
