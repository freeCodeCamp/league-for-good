import React, {Component} from 'react';
import { TextField, Toggle, Checkbox } from 'redux-form-material-ui';
import {Field, reduxForm } from 'redux-form';
import { updateTeam, openSnackbar } from '../../../../actions/index';

import validate from './utils/validation';
import normalize from './utils/normalize';

import { css_dashboard } from '../../../style';

const EditTeamForm = (props) => {
	return (
		<form style={css_dashboard.teams.forms.edit.style}>
			<Field
				name='name'
				component={TextField}
				normalize={normalize}
				hintText='Team name'
				floatingLabelText='Team Name:'
				fullWidth={true}
			/>
			<div style={css_dashboard.teams.forms.edit.checkboxDiv}>
				<Field
					component={Checkbox}
					name='currently_active'
					label='Check if active'
					checked={props.initialValues.currently_active}
					labelPosition='left'
					labelStyle={css_dashboard.teams.forms.edit.checkbox}
				/>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'EditTeamForm',
	onSubmit: updateTeam,
	onSubmitSuccess: openSnackbar,
	validate
})(EditTeamForm);
