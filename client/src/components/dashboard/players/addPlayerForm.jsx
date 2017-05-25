import React, {Component} from 'react';
import { TextField, AutoComplete } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createPlayer, openSnackbar } from '../../../actions/index';
import { css_content, css_dashboard } from '../../style';


const emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

//prevent user from submitting incorrect player info
const validate = val => {
	const errors = {};
	if(!val.first_name){
		errors.first_name = 'Please provide a first name';
	}
	else if (!val.last_name) {
		errors.last_name = 'Please provide a last name';
	}
	else if (!val.email) {
		errors.email = 'Please provide an email address';
	}
	else if (!emailRegex.test(val.email)) {
		errors.email = 'Email is not in correct format';
	}
	return errors;
};


const AddPlayerForm = props => {
	const { handleSubmit, league: { active_teams } } = props;

	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Add Player</h1>
			<h6 style={css_dashboard.warning}>* = Required</h6>
			<form 
				onSubmit={ handleSubmit}
				style={css_dashboard.form}
			>
				<Field
					name="first_name" 
					component={TextField}
					hintText="First name"
					floatingLabelText="First name*"
					floatingLabelStyle={css_dashboard.formRequired}
					fullWidth={true}
				/>
				<Field
					name="last_name" 
					component={TextField}
					hintText="Last name"
					floatingLabelText="Last name*"
					floatingLabelStyle={css_dashboard.formRequired}
					fullWidth={true}
				/>
				<Field 
					name="team"
					component={AutoComplete}
					hintText="Select a team to place player"
					floatingLabelText="Team"
					dataSource={active_teams}
					dataSourceConfig={{text:"name", value:"_id"}}
					fullWidth={true}
					maxSearchResults={5}
				/>				
				<Field
					name="email" 
					component={TextField}
					hintText="Email"
					floatingLabelText="Email*"
					floatingLabelStyle={css_dashboard.formRequired}
					fullWidth={true}
				/>
				<Field
					name="phone_num" 
					component={TextField}
					hintText="Phone number"
					floatingLabelText="Phone number"
					fullWidth={true}
				/>
				<Field
					name="address" 
					component={TextField}
					hintText="Address"
					floatingLabelText="Address"
					fullWidth={true}
				/>
				<Field
					name="city" 
					component={TextField}
					hintText="City"
					floatingLabelText="City"
					fullWidth={true}
				/>
				<Field
					name="state" 
					component={TextField}
					hintText="State"
					floatingLabelText="State"
					fullWidth={true}
				/>
				<Field
					name="country" 
					component={TextField}
					hintText="Country"
					floatingLabelText="Country"
					fullWidth={true}
				/>
				<RaisedButton
					label="Create Player"
					labelStyle={css_dashboard.raisedButton.label}
					backgroundColor={css_dashboard.raisedButton.backgroundColor}
					type="submit"
				/>
			</form>
		</div>
	);
}



export default reduxForm({
	form: 'AddPlayerForm',
	onSubmitSuccess: openSnackbar,
	onSubmit: createPlayer,
	validate,
})( AddPlayerForm );


