import React from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createTeam, openSnackbar } from '../../../actions/index';
import { containerCSS, formCSS, formButtonCSS, titleCSS, formRequiredCSS } from '../dashboardCSS';


import validate from './validation';


const AddTeamForm = props => {	
		const {handleSubmit} = props;

		return (
			<div style={containerCSS}>
				<h1 style={titleCSS}>Add Team</h1>
				<h6 style={formRequiredCSS}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit }
					style={formCSS}
				>
					<Field
						name="name" 
						component={TextField}
						hintText="Team name"
						floatingLabelText="Team name*"
						floatingLabelStyle={formRequiredCSS}
						fullWidth={true}
					/>
					<RaisedButton
						label="Create Team"
						primary={true}
						type="submit"
						style={formButtonCSS}
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


