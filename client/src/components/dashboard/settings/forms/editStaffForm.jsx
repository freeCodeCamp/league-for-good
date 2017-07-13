import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';
import { updateStaff, openSnackbar } from '../../../../actions/index';

import validate from './utils/addStaffFormValidation';

import { cssDashboard } from '../../../style';

const EditStaffForm = (props) => {
	console.log('edit staff form props', props);
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
						<MenuItem key={i} primaryText={role.title} value={role.title} />
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
		</form>
	);
};

EditStaffForm.propTypes = {
	initialValues: PropTypes.object,
	roles: PropTypes.arrayOf(PropTypes.object)
};

function mapFormStateToProps(state) {
	return { roles: state.roles };
}

export default connect(mapFormStateToProps)(
	reduxForm({
		form: 'EditStaffForm',
		onSubmit: updateStaff,
		onSubmitSuccess: openSnackbar,
		validate
})(EditStaffForm));

