import React, {Component} from 'react';
import { TextField, AutoComplete } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createPlayer, openSnackbar } from '../../../actions/index';
import { css_content, css_dashboard } from '../../style';


const emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

//prevent user from submitting incorrect player info
const validate = val => {
	const errors = { team :{} };
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
	else if (val.team && val.team.jersey_num && parseInt(val.team.jersey_num) > 99){
		
		errors.team.jersey_num = 'A jersey number should be between 0 and 99';
	}
	return errors;
};


const AddPlayerForm = props => {
	const { handleSubmit, change, teams, leagueId, initialize } = props;
	
	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Add Player</h1>
			<h6 style={css_dashboard.warning}>* = Required</h6>
			<form 
				onSubmit={ handleSubmit}
				style={css_dashboard.form}
			>
				<div style={css_dashboard.formRow}>
					<Field
						name="first_name" 
						component={TextField}
						hintText="First name"
						floatingLabelText="First name*"
						floatingLabelStyle={css_dashboard.formRequired}
					/>
					<Field
						name="last_name" 
						component={TextField}
						hintText="Last name"
						floatingLabelText="Last name*"
						floatingLabelStyle={css_dashboard.formRequired}
					/>
				</div>
				<div style={css_dashboard.formRow}>	
					<Field
						name="email" 
						component={TextField}
						hintText="Email"
						floatingLabelText="Email*"
						floatingLabelStyle={css_dashboard.formRequired}
					/>
					<Field
						name="phone_num" 
						component={TextField}
						hintText="Phone number"
						floatingLabelText="Phone number"
					/>
				</div>
				<div style={css_dashboard.formRow}>			
					<Field
						name="address" 
						component={TextField}
						hintText="Address"
						floatingLabelText="Address"
					/>
					<Field
						name="city" 
						component={TextField}
						hintText="City"
						floatingLabelText="City"
					/>
				</div>
				<div style={css_dashboard.formRow}>
					<Field
						name="state" 
						component={TextField}
						hintText="State"
						floatingLabelText="State"
					/>
					<Field
						name="country" 
						component={TextField}
						hintText="Country"
						floatingLabelText="Country"
					/>
				</div>
				<div style={css_dashboard.form}>				
					<Field 
						name="team.teamId"
						// onNewRequest={ team => change("team", team) }
						component={AutoComplete}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText="Team"
						dataSource={teams}
						dataSourceConfig={{text:"name", value:"_id"}}
						maxSearchResults={5}
						fullWidth={true}
					/>
				</div>
				<div style={css_dashboard.formRow}>
					<Field
						name="team.jersey_num"
						floatingLabelText="Jersey Number"
						type="number"
						style={{width:150}}
						component={TextField}
					/>
					<Field 
						name="team.position"
						component={TextField}
						floatingLabelText="Position(s)"
					/>
					
				</div>
				<Field
					name="leagueId" 
					component="input" 
					type="hidden" 
				/>				
				<RaisedButton
					label="Create Player"
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
	form: 'AddPlayerForm',
	onSubmitSuccess: openSnackbar,
	onSubmit: createPlayer,
	validate,
})( AddPlayerForm );
