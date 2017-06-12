import React, {Component} from 'react';
import { TextField, Toggle } from 'redux-form-material-ui';
import Checkbox from 'material-ui/Checkbox';
import {Field, reduxForm } from 'redux-form';
import { updateTeam, openSnackbar } from '../../../../actions/index';

import validate from './utils/validation';
import normalize from './utils/normalize';

const formStyle = {margin:'0px auto', width:'50%'};
const toggleStyle = {maxWidth:150, float:'right'};

class EditTeamForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: props.initialValues.currently_active, 
		};
	}

	handleToggle() {
		console.log('toggled');
		this.setState({
			active: !this.state.active ? "Active" : "Archived",
		});
		console.log('toggled');
	}

	render() {
		return (
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
						label="Active"
						toggled={this.state.active}
						onToggle={this.handleToggle}
					/>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form:'EditTeamForm',
	onSubmit: updateTeam,
	onSubmitSuccess: openSnackbar,
	validate,
})(EditTeamForm);
