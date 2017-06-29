import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { cssContent, cssDashboard } from '../../../style';
import validate from './utils/addStaffFormValidation';

const AddStaffForm = props => {
	const { handleSubmit } = props;
	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>Grant access to a staff member</h1>
			<h6 style={cssDashboard.warning}>*Requires a Gmail Account</h6>
			<form
				onSubmit={handleSubmit}
				style={cssDashboard.form}
				>
				<Field
					component={TextField}
					floatingLabelStyle={cssDashboard.formRequired}
					floatingLabelText="User's Gmail Account*"
					fullWidth={true}
					hintText='Enter A Gmail Account'
					name='email'
				/>
				<RaisedButton
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
					label='Add Staff Member'
					labelStyle={cssDashboard.raisedButton.label}
					style={cssDashboard.raisedButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
};

AddStaffForm.propTypes = {
	handleSubmit: PropTypes.func
};

export default reduxForm({
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar
})(AddStaffForm);
