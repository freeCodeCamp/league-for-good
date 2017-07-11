import React from 'react';
import PropTypes from 'prop-types';
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
					component={TextField}
					floatingLabelStyle={cssDashboard.formRequired}
					floatingLabelText='Team name*'
					fullWidth={true}
					hintText='Team name'
					name='name'
				/>
				<RaisedButton
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
					label='Create Team'
					labelStyle={cssDashboard.raisedButton.label}
					style={cssDashboard.raisedButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
};

AddTeamForm.propTypes = {
	handleSubmit: PropTypes.func
};

export default reduxForm({
	form: 'AddTeamForm',
	onSubmit: createTeam,
	onSubmitSuccess: openSnackbar,
	validate
})( AddTeamForm );


