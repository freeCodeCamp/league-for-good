import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { createPlayer, openSnackbar } from '../../../actions/index';
import { css_content, css_dashboard } from '../../style';

import PlayerFormTemplate from '../helper/playerFormTemplate.jsx';

import validate from './playerFormValidation';


const AddPlayerForm = props => {
	const { teams, handleSubmit } = props;

	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Add Player</h1>
			<h6 style={css_dashboard.warning}>* = Required</h6>
			<PlayerFormTemplate
				teams={teams}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}



export default reduxForm({
	form: 'AddPlayerForm',
	onSubmitSuccess: openSnackbar,
	onSubmit: createPlayer,
	validate,
})( AddPlayerForm );
