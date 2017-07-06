import React, {Component} from 'react';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';
import { updateStaff, openSnackbar } from '../../../../actions/index';

import validate from './utils/addStaffFormValidation';

import { css_dashboard } from '../../../style';

const EditStaffForm = (props) => {
	return (
		<form style={css_dashboard.teams.forms.edit.style}>
			<Field
				name="role"
				component={SelectField}
				hintText="Choose Role"
				style={css_dashboard.settings.forms.add.selectField}
			>
				{
					props.initialValues.roles.map((role, i) => {
						return <MenuItem value={role.title} primaryText={role.title} key={i} />;
					})
				}
			</Field>
			<Field
				name="email" 
				component={TextField}
				hintText="Enter A Gmail Account"
				floatingLabelText="User's Gmail Account:"
				fullWidth={true}
			/>
		</form>
	);
}

export default reduxForm({
	form: 'EditStaffForm',
	onSubmit: updateStaff,
	onSubmitSuccess: openSnackbar,
	validate,
})(EditStaffForm);

