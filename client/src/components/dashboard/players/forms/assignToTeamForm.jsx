import React from 'react';
import PropTypes from 'prop-types';
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
				onSubmit={handleSubmit}
				style={cssDashboard.form}
				>
				<div style={cssDashboard.formRow}>
					<Field
						component={AutoComplete}
						dataSource={teams}
						dataSourceConfig={{text: 'name', value: '_id'}}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText='Team'
						maxSearchResults={5}
						name='teamId'
					/>
					<Field
						component={AutoComplete}
						dataSource={players}
						dataSourceConfig={{text: 'fullName', value: '_id'}}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText='Select a player'
						maxSearchResults={3}
						name='playerId'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelText='Jersey Number'
						name='jerseyNum'
						normalize={normalizeJerseyNum}
						type='number'
					/>
					<Field
						component={TextField}
						floatingLabelText='Position(s)'
						name='position'
					/>
				</div>
				<RaisedButton
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
					label='Assign Player'
					labelStyle={cssDashboard.raisedButton.label}
					type='submit'
				/>
			</form>
		</div>
	);
};

AssignPlayerForm.propTypes = {
	handleSubmit: PropTypes.func,
	players: PropTypes.arrayOf(PropTypes.object),
	teams: PropTypes.arrayOf(PropTypes.object)
};

const mapState = ({players, teams}) => ({teams, players: players.list});

AssignPlayerForm = connect(mapState)(AssignPlayerForm);

export default reduxForm({
	form: 'AssignPlayerForm',
	onSubmit: assignPlayer,
	onSubmitSuccess: openSnackbar,
	validate
})(AssignPlayerForm);
