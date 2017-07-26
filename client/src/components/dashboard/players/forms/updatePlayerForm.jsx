import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from './playerFormTemplate.jsx';
import { updatePlayer } from '../../../../actions/index';

const UpdatePlayerForm = props => (
	<PlayerForm
		buttonLabel='Update Player'
		formAction={updatePlayer}
		formName = 'UpdatePlayerForm'
		playerId={props.location.state.playerId}
		title={'Update player\'s info'}
	/>
);

// React-router's 'location' property is
// used to pass player's id into this route
UpdatePlayerForm.propTypes = {
	location: PropTypes.object
};

export default UpdatePlayerForm;
