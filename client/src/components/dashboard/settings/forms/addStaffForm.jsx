import React from 'react';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { cssContent, cssDashboard } from '../../../style';
import validate from './utils/addStaffFormValidation';

const AddStaffForm = props => {
	const { handleSubmit, roles } = props;

	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>Grant access to a staff member</h1>
			<h6 style={cssDashboard.warning}>*Requires a Gmail Account</h6>
			<form
				onSubmit={ handleSubmit }
				style={cssDashboard.form}
				>
				<IconButton
					style={cssDashboard.settings.forms.add.info}
					tooltip='View Description Of Roles'
					tooltipPosition='top-right'
					touch={true}
				>
					<HelpOutline />
				</IconButton>
				<Field
					component={SelectField}
					hintText='Choose Role'
					name='role'
					style={cssDashboard.settings.forms.add.selectField}
				>
					{
						roles.map((role, i) =>
							<MenuItem key={i} primaryText={role.title} value={role.title} />
						)
					}
				</Field>
				<Field
					component={TextField}
					floatingLabelStyle={cssDashboard.formRequired}
					floatingLabelText="User's Gmail Account*"
					hintText='Enter A Gmail Account'
					name='email'
					style={cssDashboard.settings.forms.add.textField}
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
	handleSubmit: PropTypes.func,
	roles: PropTypes.array,
	staff: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
	console.log('add staff form', state);
	return { roles: state.roles, staff: state.settings.staff };
}

export default connect(mapStateToProps)(reduxForm({
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar
})( AddStaffForm ));


