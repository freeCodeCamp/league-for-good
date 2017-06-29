import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AutoComplete, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import { assignPlayer, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';

import { normalizeJerseyNum } from './utils/normalize';
import validate from './utils/assignPlayerValidation';

let AssignPlayerForm = props => {
	const {teams, players, handleSubmit } = props;
	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>Assign Player</h1>
			<form
				style={cssDashboard.form}
				onSubmit={handleSubmit}
				>
				<div style={cssDashboard.formRow}>
					<Field
						name='teamId'
						component={AutoComplete}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText='Team'
						dataSource={teams}
						dataSourceConfig={{text: 'name', value: '_id'}}
						maxSearchResults={5}
					/>
					<Field
						component={AutoComplete}
						filter={AutoComplete.caseInsensitiveFilter}
						dataSource={players}
						maxSearchResults={3}
						dataSourceConfig={{text: 'full_name', value: '_id'}}
						floatingLabelText='Select a player'
						name='playerId'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						type='number'
						floatingLabelText='Jersey Number'
						name='jersey_num'
						normalize={normalizeJerseyNum}
					/>
					<Field
						component={TextField}
						floatingLabelText='Position(s)'
						name='position'
					/>
				</div>
				<RaisedButton
					type='submit'
					label='Assign Player'
					labelStyle={cssDashboard.raisedButton.label}
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
				/>
			</form>
		</div>
	);
};

const mapState = ({players, teams}) => ({teams, players: players.list});

AssignPlayerForm = connect(mapState)(AssignPlayerForm);

export default reduxForm({
	form: 'AssignPlayerForm',
	onSubmit: assignPlayer,
	onSubmitSuccess: openSnackbar,
	validate
})(AssignPlayerForm);
