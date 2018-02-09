import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../helper/NavigationArrow.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Field, reduxForm } from 'redux-form';


import { cssContent, cssDashboard } from '../../../styles';


import {
	TextField,
	SelectField,
	DatePicker,
	Checkbox
} from 'redux-form-material-ui';


const FormTemplate = props => {
	const { handleSubmit, teams } = props;
	
	return (
			<div style={cssContent.body}>
				<Navigation tooltip='Go Back'>
					<h3>{props.title}</h3>
				</Navigation>
				<form
					onSubmit={ handleSubmit }
					style={cssDashboard.form}
					>
					<div style={cssDashboard.formRow}>
						<Field
							autoOk={true}
							component={DatePicker}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='Game Date'
							format={v => v? new Date(v) : null}
							formatDate={d => d.toDateString()}
							name='datePlayed'
						/>
						<Field
							component={TextField}
							floatingLabelText='Venue'
							name='venue'
						/>
					</div>
					<br/>
					<div style={cssDashboard.formRow}>
						<Field
							component={SelectField}
							floatingLabelText='Home Team'
							hintText='Select the home team'
							name='homeTeamId'
							style={cssDashboard.settings.forms.add.selectField}
							>
							{
								teams.map(team => 
									<MenuItem 
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
								)
							}
						</Field>
						<Field
							component={SelectField}
							floatingLabelText='Opponent'
							hintText='Select the an opponent'
							name='awayTeamId'
							style={cssDashboard.settings.forms.add.selectField}
							>
							{
								teams.map(team => 
									<MenuItem 
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
								)
							}
						</Field>							
					</div>
					<RaisedButton
						label='Submit'
						primary={true}
						style={{marginRight:5}}
						type='submit'
					/>
					<RaisedButton
						label='Reset'
						onTouchTap={props.reset}
						secondary={true}
					/>					
				</form>
			</div>
	);
};

FormTemplate.propTypes = {
	handleSubmit: PropTypes.func,
	reset: PropTypes.func,
	title: PropTypes.string
};

export default FormTemplate;


