import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import { Field } from 'redux-form';
import { cssDashboard } from '../../../../styles';
import { SelectField } from 'redux-form-material-ui';

const renderTeams = teams =>
	teams.map(team => (
		<MenuItem
			key={team._id}
			primaryText={team.name}
			value={team._id}
		/>
		)
	);


export const TeamDropdowns = props => (
	<div style={cssDashboard.formRow}>
			<Field
				component={SelectField}
				floatingLabelText='Home Team'
				hintText='Select the home team'
				name='homeTeamId'
				style={cssDashboard.settings.forms.add.selectField}
				>
				{
					renderTeams(props.teams)
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
					renderTeams(props.teams)
				}
			</Field>
	</div>
);


TeamDropdowns.propTypes = {
	teams: PropTypes.array
};


export default TeamDropdowns;
