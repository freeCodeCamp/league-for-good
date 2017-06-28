import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { cssContent, cssDashboard } from '../../../style';
import validate from './utils/addStaffFormValidation';

const AddStaffForm = props => {
	const {handleSubmit} = props;
	return (
			<div style={cssContent.body}>
				<h1 style={cssDashboard.title}>Grant access to a staff member</h1>
				<h6 style={cssDashboard.warning}>*Requires a Gmail Account</h6>
				<form
					onSubmit={ handleSubmit }
					style={cssDashboard.form}
					>
					<Field
						name='email'
						component={TextField}
						hintText='Enter A Gmail Account'
						floatingLabelText="User's Gmail Account*"
						floatingLabelStyle={cssDashboard.formRequired}
						fullWidth={true}
					/>
					<RaisedButton
						label='Add Staff Member'
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
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar
})( AddStaffForm );


