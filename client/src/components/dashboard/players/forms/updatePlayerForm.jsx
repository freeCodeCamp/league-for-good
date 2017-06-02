import React from 'react';
import { reduxForm } from 'redux-form';
import { updatePlayer, openSnackbar } from '../../../../actions/index';

import PlayerFormTemplate from './playerFormTemplate.jsx';

import validate from './validation/playerFormValidation';

import { createPlayer, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';

const UpdatePlayerForm = props => {
	
	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Update Player Info</h1>
			<h6 style={css_dashboard.warning}>* = Required</h6>
			<PlayerFormTemplate
				handleSubmit={props.handleSubmit}
				teams={props.teams}
				initialValues={props.initialValues}
			/>
		</div>
	);
}



export default reduxForm({
	form: 'UpdatePlayerForm',
	onSubmitSuccess: openSnackbar,
	onSubmit: updatePlayer,
	validate,
})( UpdatePlayerForm );
