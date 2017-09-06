import React from 'react';
import PropTypes from 'prop-types';

const DeleteSeasonForm = props => (
	<p>
		Are you sure you want to delete season <strong> {props.name}? </strong>
		This action cannot be undone.
	</p>
);

DeleteSeasonForm.propTypes = {
	name: PropTypes.string
};

export default DeleteSeasonForm;
