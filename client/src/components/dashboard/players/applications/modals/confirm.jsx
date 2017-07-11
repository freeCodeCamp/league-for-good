import React from 'react';
import PropTypes from 'prop-types';

const CorfirmPlayerRegModal = ({player}) => (
	<div>
		<h2>
			Add { player.full_name} to your league database?
		</h2>
	</div>
);

CorfirmPlayerRegModal.propTypes = {
	player: PropTypes.string
};

export default CorfirmPlayerRegModal;
