import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createTeam, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';


import validate from './utils/validation';


const AddTeamForm = props => {
	const { handleSubmit } = props;
	return (
			<div style={cssContent.body}>
				<h1 style={cssDashboard.title}>Add Team</h1>
				<h6 style={cssDashboard.warning}>* = Required</h6>
				<form
					onSubmit={ handleSubmit }
					style={cssDashboard.form}
					>
					<Field
						name='name'
						component={TextField}
						hintText='Team name'
						floatingLabelText='Team name*'
						floatingLabelStyle={cssDashboard.formRequired}
						fullWidth={true}
					/>
					<RaisedButton
						label='Create Team'
						labelStyle={cssDashboard.raisedButton.label}
						backgroundColor={cssDashboard.raisedButton.backgroundColor}
						style={cssDashboard.raisedButton.style}
						type='submit'
					/>
				</form>
			</div>
	);
};


export default reduxForm({
	form: 'AddTeamForm',
	onSubmit: createTeam,
	onSubmitSuccess: openSnackbar,
	validate
})( AddTeamForm );


