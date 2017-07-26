import React from 'react';
import PlayerForm from './playerFormTemplate.jsx';
import { createPlayer } from '../../../../actions/index';

const AddPlayerForm = () => (
	<PlayerForm
		buttonLabel='Add Player'
		formAction={createPlayer}
		formName = 'AddPlayerForm'
		playerId={null}
		title='Add a player to the league'
	/>
);

export default AddPlayerForm;
