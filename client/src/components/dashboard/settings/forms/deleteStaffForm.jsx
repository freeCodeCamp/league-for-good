import React from 'react';

const DeleteStaffForm = props => (
	<p>Are you sure you want to delete staff member <strong><u>{props.email}</u></strong>? This action cannot be undone.</p>
);

export default DeleteStaffForm;
