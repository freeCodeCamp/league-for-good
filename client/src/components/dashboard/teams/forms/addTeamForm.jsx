import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createTeam, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';


import validate from './validation/validation';


const AddTeamForm = props => {	
		const {handleSubmit} = props;

		return (
			<div style={css_content.body}>
				<h1 style={css_dashboard.title}>Add Team</h1>
				<h6 style={css_dashboard.warning}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit }
					style={css_dashboard.form}
				>
					<Field
						name="name" 
						component={TextField}
						hintText="Team name"
						floatingLabelText="Team name*"
						floatingLabelStyle={css_dashboard.formRequired}
						fullWidth={true}
					/>
					<RaisedButton
						label="Create Team"
						labelStyle={css_dashboard.raisedButton.label}
						backgroundColor={css_dashboard.raisedButton.backgroundColor}
						style={css_dashboard.raisedButton.style}
						type="submit"
					/>
				</form>
			</div>
		);
	}



export default reduxForm({
	form: 'AddTeamForm',
	onSubmit: createTeam,
	onSubmitSuccess: openSnackbar,
	validate,
})( AddTeamForm );


