import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { createSeason, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';
import { getMinDate, getFormattedDate } from './utils/dateHelpers';
import {

	SelectField,
	DatePicker,
	Checkbox
} from 'redux-form-material-ui';
// import validate from './utils/validation';

// const thisYear = new Date().getFullYear();


const AddSeasonForm = props => {
	const { handleSubmit, leagueSettings, formVals } = props;

	return (
			<div style={cssContent.body}>
				<h1 style={cssDashboard.title}>Add Season</h1>
				<h6 style={cssDashboard.warning}>* = Required</h6>
				<form
					onSubmit={ handleSubmit }
					style={cssDashboard.form}
					>
					<div style={cssDashboard.formRow}>
						<Field
							component={SelectField}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='Season*'
							hintText='Season'
							name='quarter'
							>
						{
								leagueSettings.season.names.map(name =>
									<MenuItem key={name} primaryText={name} value={name}/>
								)
							}
						</Field>
					</div>
					<div style={cssDashboard.formRow}>
						<Field
							autoOk={true}
							component={DatePicker}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='Start Date'
							format={null}
							formatDate={getFormattedDate}
							name='startDate'
						/>
						<Field
							autoOk={true}
							component={DatePicker}
							disabled={!formVals.startDate}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='End Date'
							format={null}
							formatDate={getFormattedDate}
							minDate = {getMinDate(formVals, leagueSettings)}
							name='endDate'
						/>
					</div>
					<br/>
					<div style={cssDashboard.teams.forms.edit.checkboxDiv}>
						<Field
							checked={props.initialValues.importActiveTeams}
							component={Checkbox}
							label='Import Active Teams'
							labelPosition='left'
							labelStyle={cssDashboard.teams.forms.edit.checkbox}
							name='importActiveTeams'

						/>
					</div>
					<RaisedButton
						backgroundColor={cssDashboard.raisedButton.backgroundColor}
						label='Create Season'
						labelStyle={cssDashboard.raisedButton.label}
						style={cssDashboard.raisedButton.style}
						type='submit'
					/>
				</form>
			</div>
	);
};

const selector = formValueSelector('AddSeasonForm');

AddSeasonForm.propTypes = {
	formVals: PropTypes.object,
	handleSubmit: PropTypes.func,
	initialValues: PropTypes.object,
	leagueSettings: PropTypes.array
};

function mapStateToProps(state) {
	const { year, startDate } = selector(state, 'year', 'startDate');
	return {
		formVals: { year, startDate },
		initialValues: { importActiveTeams: true },
		leagueSettings: state.league.selected.settings
	};
}

const WrappedForm = reduxForm({
	form: 'AddSeasonForm',
	onSubmit: createSeason,
	onSubmitSuccess: openSnackbar
	// validate,
})(AddSeasonForm);

export default connect(mapStateToProps)(WrappedForm);


