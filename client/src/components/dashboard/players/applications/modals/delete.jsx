import React from 'react';
import PropTypes from 'prop-types';

const DeletePlayerRegModal = ({player}) => (
	<div>
		<h2>
			Are you sure you want to permanently delete
			{ player.full_name }'s registration?
		</h2>
	</div>
);

DeletePlayerRegModal.propTypes = {
	player: PropTypes.object
};

export default DeletePlayerRegModal;
