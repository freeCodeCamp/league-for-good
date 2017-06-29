import React, {Component} from 'react';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';
import { editStaff, openSnackbar } from '../../../../actions/index';

import validate from './utils/addStaffFormValidation';
import { css_dashboard } from '../../../style';

const EditStaffForm = (props) => {
	return (
		<form style={css_dashboard.form}> 
			<Field
				component={SelectField}
				name="role"
				hintText="Choose Role"
				style={css_dashboard.settings.forms.edit.selectField}
			>
				<MenuItem value="test" primaryText="test" />
			</Field>
			<Field
				name="email" 
				component={TextField}
				hintText="Staff Email"
				floatingLabelText="Staff Email:"
				fullWidth={true}
			/>
		</form>
	);
}

export default reduxForm({
	form:'EditStaffForm',
	onSubmit: editStaff,
	onSubmitSuccess: openSnackbar,
	validate,
})(EditStaffForm);
