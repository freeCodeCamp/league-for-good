import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/image/edit';

const EditLink = props => {
	const url = {
		pathname: '/dashboard/seasons/games/edit',
		state: { game: props.game }
	};
	return (
		<Link to={url}>
			<IconButton>
				<EditIcon/>
			</IconButton>
		</Link>
	);
};


EditLink.propTypes = {
	game: PropTypes.object
};

export default EditLink;
