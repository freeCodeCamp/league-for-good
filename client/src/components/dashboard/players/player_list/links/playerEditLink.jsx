import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { PLAYER_UPDATE_FORM, makeLinkDynamic } from '../../../../routes';
import { cssDashboard } from '../../../../style';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';

const PlayerEditLink = ({ player }) => {

	const pathname = makeLinkDynamic( PLAYER_UPDATE_FORM, player._id );
	const state = { playerId: player._id };

	return (
			<Link to={{ state, pathname }}>
				<IconButton hoveredStyle={cssDashboard.table.iconHover}>
					<EditIcon/>
				</IconButton>
			</Link>
	);
};

PlayerEditLink.propTypes = {
	player: PropTypes.object
};

export default PlayerEditLink;
