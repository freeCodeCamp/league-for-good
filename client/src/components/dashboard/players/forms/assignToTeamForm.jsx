import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AutoComplete, TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import { assignPlayer, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';

import { normalizeJerseyNum } from './utils/normalize';
import validate from './utils/assignPlayerValidation';

let AssignPlayerForm = props => {
	const {teams, players, handleSubmit } = props;
	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>Assign Player</h1>
			<form
				style={css_dashboard.form}
				onSubmit={handleSubmit}
				>
				<div style={css_dashboard.formRow}>
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
				<div style={css_dashboard.formRow}>
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
					labelStyle={css_dashboard.raisedButton.label}
					backgroundColor={css_dashboard.raisedButton.backgroundColor}
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
