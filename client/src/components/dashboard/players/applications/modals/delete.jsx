import React from 'react';

const DeletePlayerRegModal = ({player}) => (
	<div>
		<h2>
			Are you sure you want to permanently delete { player.full_name}'s registration?
		</h2>
	</div>
);

export default DeletePlayerRegModal