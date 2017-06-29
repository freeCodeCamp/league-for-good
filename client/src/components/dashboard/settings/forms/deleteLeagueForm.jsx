import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createTeam, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';


const DeleteLeagueForm = props => {
	// const { handleSubmit } = props;
	return (
			<div style={cssContent.body}>
				<h1 style={cssDashboard.title}>Delete League</h1>
				<h2 style={cssDashboard.warning}>
					Are you sure you want to delete the league? This action cannot be undone.
				</h2>
				<form
					// onSubmit={ handleSubmit }
					style={cssDashboard.form}
					>
					<RaisedButton
						label='Delete League'
						labelStyle={cssDashboard.warningButton.label}
						backgroundColor={cssDashboard.warningButton.backgroundColor}
						style={cssDashboard.warningButton.style}
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

