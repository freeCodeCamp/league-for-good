import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../helper/NavigationArrow.jsx';

import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';


import { cssContent, cssDashboard } from '../../../styles';


import {
	TextField,
	SelectField,
	DatePicker
} from 'redux-form-material-ui';


export default class FormTemplate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			home: props.initialValues && props.initialValues.homeTeamId,
			away: props.initialValues && props.initialValues.awayTeamId
		};
	}

	handleTeamSelection(id, newTeamId, oldTeamId, fieldId) {
		const newState = fieldId === 'home' ? {home: newTeamId} : {away: newTeamId};
		this.setState(newState);
	}

	render() {
		const { handleSubmit, teams, title, reset } = this.props;
		this.handleTeamSelection = this.handleTeamSelection.bind(this);
		return (
			<div style={cssContent.body}>
				<Navigation tooltip='Go Back'>
					<h3>{title}</h3>
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
							format={v => v ? new Date(v) : null}
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
							onChange={(i, n, o) => {
								this.handleTeamSelection(i, n, o, 'home');
								}
							}
							style={cssDashboard.settings.forms.add.selectField}
							>
							{
								teams.filter(team => team._id !== this.state.away).map(team => (
									<MenuItem
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
									)
								)
							}
						</Field>
						<Field
							component={SelectField}
							floatingLabelText='Opponent'
							hintText='Select the an opponent'
							name='awayTeamId'
							onChange={(i, n, o) => {
								this.handleTeamSelection(i, n, o, 'away');
								}
							}
							style={cssDashboard.settings.forms.add.selectField}
							>
							{
								teams.filter(team => team._id !== this.state.home).map(team => (
									<MenuItem
										key={team._id}
										// onChange={(e) => {this.handleTeamSelection(e, 'away');}}
										primaryText={team.name}
										value={team._id}
									/>
									)
								)
							}
						</Field>
					</div>
					<RaisedButton
						label='Submit'
						primary={true}
						style={{marginRight: 5}}
						type='submit'
					/>
					<RaisedButton
						label='Reset'
						onTouchTap={reset}
						secondary={true}
					/>
				</form>
			</div>
		);
	}
}

FormTemplate.propTypes = {
	handleSubmit: PropTypes.func,
	initialValues: PropTypes.object,
	reset: PropTypes.func,
	teams: PropTypes.array,
	title: PropTypes.string
};
