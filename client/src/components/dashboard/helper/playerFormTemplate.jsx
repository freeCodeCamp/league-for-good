import React from 'react';
import { Field } from 'redux-form';
import { TextField, AutoComplete } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { createPlayer, openSnackbar } from '../../../actions/index';
import { css_content, css_dashboard } from '../../style';

const PlayerFormTemplate = ({handleSubmit, teams}) => {
	
	return (
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

	)
}

export default PlayerFormTemplate;