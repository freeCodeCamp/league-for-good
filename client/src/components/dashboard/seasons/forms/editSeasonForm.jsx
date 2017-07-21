import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { editSeason, openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';
import validate from './utils/validation';
import getFormattedDate from './utils/formatDate';

//DatePicker component will throw an error if 
//you pass in an initial value of a number
const format = v => 
	typeof v === 'number' ? new Date(v) : v;

import {
	TextField,
	DatePicker,
	Checkbox
} from 'redux-form-material-ui';


const EditSeasonForm = props => {


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



