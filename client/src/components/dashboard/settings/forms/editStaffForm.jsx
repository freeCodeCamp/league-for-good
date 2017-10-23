import React from 'react';
import PropTypes from 'prop-types';

import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';
import { updateStaff, openSnackbar } from '../../../../actions/index';

import validate from './utils/addStaffFormValidation';

import { cssDashboard } from '../../../styles';

const EditStaffForm = (props) => {
	return (
		<form style={cssDashboard.teams.forms.edit.style}>
			<Field
				component={SelectField}
				hintText='Choose Role'
				name='role'
				style={cssDashboard.settings.forms.edit.selectField}
				>
				{
					props.roles.map((role, i) =>
						<MenuItem key={i} primaryText={role} value={role} />
					)
				}
			</Field>
			<Field
				component={TextField}
				floatingLabelText="User's Gmail Account:"
				fullWidth={true}
				hintText='Enter A Gmail Account'
				name='email'
			/>
			<Field
				component='input'
				name='origEmail'
				type='hidden'
			/>
		</form>
	);
};

EditStaffForm.propTypes = {
	initialValues: PropTypes.object,
	roles: PropTypes.array
};

export default reduxForm({
	form: 'EditStaffForm',
	validate,
	onSubmit: updateStaff,
	onSubmitSuccess: openSnackbar
})(EditStaffForm);

