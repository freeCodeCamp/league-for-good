import React from 'react';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import HelpOutline from 'material-ui/svg-icons/action/help-outline';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { css_content, css_dashboard } from '../../../style';
import validate from './utils/addStaffFormValidation';

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
					/>
				</form>
			</div>
	);
};

function mapStateToProps(state) {
	console.log('add staff form', state);
	return { roles: state.roles };
}

export default connect(mapStateToProps)(reduxForm({
	form: 'AddStaffForm',
	validate,
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar,
})( AddStaffForm ));


