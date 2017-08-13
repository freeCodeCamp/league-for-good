import React from 'react';
import PropTypes from 'prop-types';

import { TextField, Checkbox } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { updateTeam, openSnackbar } from '../../../../actions/index';

import validate from './utils/validation';
import normalize from './utils/normalize';

import { cssDashboard } from '../../../style';

const EditTeamForm = (props) => {
	return (
		<form style={cssDashboard.teams.forms.edit.style}>
			<Field
				component={TextField}
				fullWidth={true}
				hintText='Team name'
				name='name'
				normalize={normalize}
			/>
			<div style={cssDashboard.teams.forms.edit.checkboxDiv}>
				<Field
					checked={props.initialValues.currentlyActive}
					component={Checkbox}
					label='Check if team is active'
					labelPosition='left'
					labelStyle={cssDashboard.teams.forms.edit.checkbox}
					name='currentlyActive'
				/>
			</div>
		</form>
	);
};

EditTeamForm.propTypes = {
	initialValues: PropTypes.object
};

export default reduxForm({
	form: 'EditTeamForm',
	onSubmit: updateTeam,
	onSubmitSuccess: openSnackbar,
	validate
})(EditTeamForm);
