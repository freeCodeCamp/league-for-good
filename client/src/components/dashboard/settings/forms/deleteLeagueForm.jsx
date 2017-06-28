import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createTeam, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';


const DeleteLeagueForm = props => {
	// const { handleSubmit } = props;
	return (
			<div style={css_content.body}>
				<h1 style={css_dashboard.title}>Delete League</h1>
				<h2 style={css_dashboard.warning}>
					Are you sure you want to delete the league? This action cannot be undone.
				</h2>
				<form
					// onSubmit={ handleSubmit }
					style={css_dashboard.form}
					>
					<RaisedButton
						label='Delete League'
						labelStyle={css_dashboard.warningButton.label}
						backgroundColor={css_dashboard.warningButton.backgroundColor}
						style={css_dashboard.warningButton.style}
						type='submit'
					/>
				</form>
			</div>
	);
};


export default DeleteLeagueForm;
/* export default reduxForm({
	form: 'AddTeamForm',
	onSubmit: createTeam,
	onSubmitSuccess: openSnackbar,
	validate,
})( AddTeamForm );
*/

