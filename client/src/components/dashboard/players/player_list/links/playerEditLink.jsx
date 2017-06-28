import React from 'react';
import { Link } from 'react-router-dom';

import { PLAYER_UPDATE_FORM, makeLinkDynamic } from '../../../../routes';
import { css_dashboard } from '../../../../style';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';

const PlayerEditLink = ({ player, ...props }) => {

	const pathname = makeLinkDynamic( PLAYER_UPDATE_FORM, player._id );
	const state = { player };

	return (
			<Link to={{ state, pathname }}>
				<IconButton hoveredStyle={css_dashboard.table.iconHover}>
					<EditIcon/>
				</IconButton>
			</Link>
	);
};

export default PlayerEditLink;
