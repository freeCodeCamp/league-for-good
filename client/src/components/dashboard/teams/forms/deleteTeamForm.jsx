import React from 'react';
import PropTypes from 'prop-types';

const DeleteTeamForm = props => (
	<p>
		Are you sure you want to delete team <strong>{props.name}</strong>?
		This action cannot be undone.
	</p>
);

DeleteTeamForm.propTypes = {
	name: PropTypes.string
};

export default DeleteTeamForm;
