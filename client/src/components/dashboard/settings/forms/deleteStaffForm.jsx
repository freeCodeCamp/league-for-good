import React from 'react';
import PropTypes from 'prop-types';

const DeleteStaffForm = props => (
	<p>
		Are you sure you want to delete staff member <strong>{props.email}</strong>?
		This action cannot be undone.
	</p>
);

DeleteStaffForm.propTypes = {
	email: PropTypes.string
};

export default DeleteStaffForm;
