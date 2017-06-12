import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { addStaffMember, openSnackbar } from '../../../../actions/index';

import { css_content, css_dashboard } from '../../../style';

const AddStaffForm = props => {	
	const {handleSubmit} = props;
	return (
			<div >
				<h1 >Grant login access to a staff member</h1>
				<h6 >Requires a Gmail Account</h6>
				<form 
					onSubmit={ handleSubmit }
					
				>
					<Field
						name="email" 
						component={TextField}
						hintText="Enter A Gmail Account"
						floatingLabelText="User's Gmail Account"
						fullWidth={true}
					/>									
					<RaisedButton
						label="Grant Access"
						primary={true}
						type="submit"
						labelStyle={css_dashboard.raisedButton.label}
						backgroundColor={css_dashboard.raisedButton.backgroundColor}
					/>
				</form>
			</div>
	);
};



export default reduxForm({
	form: 'AddStaffForm',
	onSubmit: addStaffMember,
	onSubmitSuccess: openSnackbar,
})( AddStaffForm );


