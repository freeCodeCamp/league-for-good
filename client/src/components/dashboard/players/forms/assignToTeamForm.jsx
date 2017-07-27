import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AutoComplete, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { getAssignFormVals } from './playerFormData.selector';
import { assignPlayer, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';


import validate from './utils/assignPlayerValidation';

let AssignPlayerForm = props => {
	const {teams, players, handleSubmit, change } = props;
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
						name='team.teamId'
						onNewRequest={team => change('team.seasonId', team.seasonId)}
					/>
					<Field
						component={AutoComplete}
						dataSource={players}
						dataSourceConfig={{text: 'fullName', value: '_id'}}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText='Select a player'
						maxSearchResults={3}
						name='playerId'
						onNewRequest={player => change('player', player)}
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelText='Jersey Number'
						name='team.jerseyNum'
						parse={val => parseInt(val, 10)}
						type='number'
					/>
					<Field
						component={TextField}
						floatingLabelText='Position(s)'
						name='team.position'
						parse={val => val.split(', ')}
					/>
				</div>
				<Field
					component='input'
					name='player'
					type='hidden'
				/>
				<Field
					component='input'
					name='team.season'
					type='hidden'
				/>
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
	change: PropTypes.func,
	handleSubmit: PropTypes.func,
	players: PropTypes.arrayOf(PropTypes.object),
	teams: PropTypes.arrayOf(PropTypes.object)
};

const selector = getAssignFormVals();

function mapStateToProps(state) {
	return { ...selector(state) };
}

const Form = reduxForm({
	form: 'AssignPlayerForm',
	onSubmit: assignPlayer,
	onSubmitSuccess: openSnackbar,
	validate
})(AssignPlayerForm);

export default connect(mapStateToProps)(Form);
