import React from 'react';
import { connect } from 'react-redux';
import { TextField, SelectField, DatePicker } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { createSeason, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';
import { getMinDate, getFormattedDate } from './utils/dateHelpers';

// import validate from './utils/validation';

const thisYear = new Date().getFullYear();


const normalizeYear = (val, prevVal) => {
	if (!isNaN(val) && val.length <= 4) return val;
	return prevVal;
}

const AddSeasonForm = props => {	
	const { handleSubmit, leagueSettings, formVals, change } = props;
	
	return (
			<div style={css_content.body}>
				<h1 style={css_dashboard.title}>Add Season</h1>
				<h6 style={css_dashboard.warning}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit }
					style={css_dashboard.form}
				>
					<div style={css_dashboard.formRow}>
						<Field
							name="quarter" 
							component={SelectField}
							hintText="Season"
							floatingLabelText="Season*"
							floatingLabelStyle={css_dashboard.formRequired}
						>
						{
								leagueSettings.season.names.map(name => 
									<MenuItem key={name} value={name} primaryText={name}/>
								)
							}
						</Field>
						<Field
							name="year" 
							normalize={normalizeYear}
							component={TextField}
							hintText="Year"
							floatingLabelText="Year*"
							floatingLabelStyle={css_dashboard.formRequired}
						/>
					</div>
					<div style={css_dashboard.formRow}>
						<Field
							component={DatePicker}
							name="start_date"
							format={null}
							autoOk={true}
							onChange={(_, date) => change('year', date.getFullYear())}
							formatDate={getFormattedDate}
							floatingLabelStyle={css_dashboard.formRequired}
							floatingLabelText="Start Date"
						/>
						<Field
							component={DatePicker}
							name="end_date"
							format={null}
							floatingLabelStyle={css_dashboard.formRequired}
							floatingLabelText="End Date"
							autoOk={true}
							formatDate={getFormattedDate}
							disabled={!formVals.start_date}
							minDate = {getMinDate(formVals, leagueSettings)}
						/>						
					</div>
					<RaisedButton
						label="Create Season"
						labelStyle={css_dashboard.raisedButton.label}
						backgroundColor={css_dashboard.raisedButton.backgroundColor}
						style={css_dashboard.raisedButton.style}
						type="submit"
					/>
				</form>
			</div>
	);
};

const selector = formValueSelector('AddSeasonForm');

function mapStateToProps(state) {
	const { year, start_date } = selector(state, 'year', 'start_date')
	return { 
		formVals: { year, start_date },
		leagueSettings: state.league.selected.settings 
	};
}



export default reduxForm({
	form: 'AddSeasonForm',
	onSubmit: createSeason,
	onSubmitSuccess: openSnackbar,
	// validate,
})( 
	connect(mapStateToProps)(AddSeasonForm)
);



