import React from 'react';

const DeleteTeamForm = props => (
	<p>Are you sure you want to delete team <strong><u>{props.name}</u></strong>? This action cannot be undone.</p>
);

export default DeleteTeamForm;
