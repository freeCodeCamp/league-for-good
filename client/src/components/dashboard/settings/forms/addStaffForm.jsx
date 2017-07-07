import React from 'react';
<<<<<<< HEAD
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
=======
import PropTypes from 'prop-types';
import { TextField } from 'redux-form-material-ui';
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { cssContent, cssDashboard } from '../../../style';
import validate from './utils/addStaffFormValidation';

<<<<<<< HEAD
const AddStaffForm = props => {	
	const { handleSubmit, roles } = props;

	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Grant access to a staff member</h1>
			<h6 style={css_dashboard.warning}>*Requires a Gmail Account</h6>
			<form 
				onSubmit={ handleSubmit }
				style={css_dashboard.form}
			>
				<IconButton
					tooltip="View Description Of Roles"
					tooltipPosition="top-right"
					touch={true}
					style={css_dashboard.settings.forms.add.info}
				>
					<HelpOutline />
				</IconButton>
				<Field
					name="role"
					component={SelectField}
					hintText="Choose Role"
					style={css_dashboard.settings.forms.add.selectField}
				>
					{
						roles.map((role, i) => {
							return <MenuItem value={role.title} primaryText={role.title} key={i} />;
						})
					}
				</Field>
				<Field
					name="email" 
					component={TextField}
					hintText="Enter A Gmail Account"
					floatingLabelText="User's Gmail Account*"
					floatingLabelStyle={css_dashboard.formRequired}
					style={css_dashboard.settings.forms.add.textField}
				/>									
				<RaisedButton
					label="Add Staff Member"
					labelStyle={css_dashboard.raisedButton.label}
					backgroundColor={css_dashboard.raisedButton.backgroundColor}
					style={css_dashboard.raisedButton.style}
					type="submit"
=======
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
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
				/>
			</form>
		</div>
	);
};

<<<<<<< HEAD
function mapStateToProps(state) {
	console.log('add staff form', state);
	return { roles: state.roles, staff: state.settings.staff };
}

export default connect(mapStateToProps)(reduxForm({
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar,
})( AddStaffForm ));


=======
AddStaffForm.propTypes = {
	handleSubmit: PropTypes.func
};

export default reduxForm({
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar
})(AddStaffForm);
>>>>>>> 2b3f020ce568d018cde22a5fad6e24be422578e2
