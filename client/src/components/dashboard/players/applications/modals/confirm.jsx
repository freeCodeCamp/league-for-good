import React from 'react';
import PropTypes from 'prop-types';

const CorfirmPlayerRegModal = ({player}) => (
	<div>
		<h2>
			Add { player.fullName } to your league database?
		</h2>
	</div>
);

CorfirmPlayerRegModal.propTypes = {
	player: PropTypes.object
};

export default CorfirmPlayerRegModal;
