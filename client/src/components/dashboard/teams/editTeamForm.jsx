import React, {Component} from 'react';
import { TextField, Toggle } from 'redux-form-material-ui';
import {Field, reduxForm } from 'redux-form';
import { updateTeam, openSnackbar } from '../../../actions/index';

import validate from './validation';
import normalize from './normalize';

const formStyle = {margin:'0 auto',width:'50%'};
const toggleStyle = {maxWidth:150, float:'right'};


const EditTeamForm = props => (
	<form style={formStyle}>
		<Field
			name="name" 
			component={TextField}
			normalize={normalize}
			hintText="Team name"
			floatingLabelText="Team Name:"
			fullWidth={true}
		/>
		<div style={toggleStyle}>
			<Field
				component={Toggle}
				name="currently_active"
				label="Mark as active?"
			/>
		</div>
	</form>

)

export default reduxForm({
	form:'EditTeamForm',
	onSubmit: updateTeam,
	onSubmitSuccess: openSnackbar,
	validate
})(EditTeamForm);