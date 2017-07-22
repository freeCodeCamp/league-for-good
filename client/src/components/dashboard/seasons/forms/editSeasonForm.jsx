import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { editSeason, openSnackbar } from '../../../../actions/index';
import { cssDashboard } from '../../../style';
import validate from './utils/validation';
import getFormattedDate from './utils/formatDate';
import { TextField, DatePicker } from 'redux-form-material-ui';

// DatePicker component will throw an error if
// you pass in an initial value of a number which is
// and the dates are being retrieved as unix timestamps
const format = v =>
	typeof v === 'number' ? new Date(v) : v;


const EditSeasonForm = () => {

	return (
		<form style={cssDashboard.form}>
			<div style={cssDashboard.formRow}>
				<Field
					autoOk={true}
					component={DatePicker}
					floatingLabelStyle={cssDashboard.formRequired}
					floatingLabelText='Start Date'
					format={format}
					formatDate={getFormattedDate}
					name='startDate'
				/>
				<Field
					autoOk={true}
					component={DatePicker}
					floatingLabelStyle={cssDashboard.formRequired}
					floatingLabelText='End Date'
					format={format}
					formatDate={getFormattedDate}
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
			</div>
		</form>
	);
};


export default reduxForm({
	form: 'editSeasonForm',
	onSubmit: editSeason,
	onSubmitSuccess: openSnackbar,
	validate
})(EditSeasonForm);


