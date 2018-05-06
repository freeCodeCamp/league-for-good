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
			home: props.initialValues.homeTeamId,
			away: props.initialValues.awayTeamId
		};
	}

	handleHomeTeamSelection(id, newTeamId) {
		const newState = { home: newTeamId };
		this.setState(newState);
	}

	handleAwayTeamSelection(id, newTeamId) {
		const newState = { away: newTeamId };
		this.setState(newState);
	}

	render() {
		const { handleSubmit, teams, title, reset } = this.props;
		this.handleHomeTeamSelection = this.handleHomeTeamSelection.bind(this);
		this.handleAwayTeamSelection = this.handleAwayTeamSelection.bind(this);
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
							onChange={this.handleHomeTeamSelection}
							style={cssDashboard.settings.forms.add.selectField}
							>
							{
								teams.map(team => team._id !== this.state.away ? (
									<MenuItem
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
								) : '' )
							}
						</Field>
						<Field
							component={SelectField}
							floatingLabelText='Opponent'
							hintText='Select the an opponent'
							name='awayTeamId'
							onChange={this.handleAwayTeamSelection}
							style={cssDashboard.settings.forms.add.selectField}
							>
							{
								teams.map(team => team._id !== this.state.home ? (
									<MenuItem
										key={team._id}
										primaryText={team.name}
										value={team._id}
									/>
								) : '' )
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
