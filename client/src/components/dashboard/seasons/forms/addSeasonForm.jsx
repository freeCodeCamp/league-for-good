import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createSeason, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';
import { getMinDate, getFormattedDate } from './utils/dateHelpers';
import {
	TextField,
	DatePicker,
	Checkbox
} from 'redux-form-material-ui';
// import validate from './utils/validation';

// const thisYear = new Date().getFullYear();


const AddSeasonForm = props => {
	const { handleSubmit } = props;

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
							// disabled={!formVals.startDate}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='End Date'
							format={null}
							formatDate={getFormattedDate}
							// minDate = {getMinDate(formVals, leagueSettings)}
							name='endDate'
						/>
					</div>
					<br/>
					<div style={cssDashboard.formRow}>
						<Field
							component={TextField}
							floatingLabelStyle={cssDashboard.formRequired}
							floatingLabelText='Season name*'
							hintText='Name of the season'
							name='name'
						/>
						<div>
							<Field
								component={Checkbox}
								label='Import All Teams'
								labelPosition='left'
								name='importActiveTeams'
							/>
						</div>
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

AddSeasonForm.propTypes = {
	handleSubmit: PropTypes.func
};


const DecoratedForm = reduxForm({
	form: 'AddSeasonForm',
	onSubmit: createSeason,
	onSubmitSuccess: openSnackbar
	// validate,
})(AddSeasonForm);

function mapStateToProps(state) {
	return { teams: state.teams };
}

export default connect(mapStateToProps)(DecoratedForm);





