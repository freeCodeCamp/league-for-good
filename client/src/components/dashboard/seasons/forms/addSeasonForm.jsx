import React from 'react';
import { connect } from 'react-redux';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';

import { createTeam, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';


// import validate from './utils/validation';

const thisYear = new Date().getFullYear();


const normalizeYear = (val, prevVal) => {
	if (!isNaN(val) && val.length <= 4) return val;
	return prevVal;
}

const AddSeasonForm = props => {	
	const { handleSubmit } = props;
	
	return (
			<div style={css_content.body}>
				<h1 style={css_dashboard.title}>Add Season</h1>
				<h6 style={css_dashboard.warning}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit }
					style={css_dashboard.form}
				>
					<div>
					<Field
						name="quarter" 
						component={SelectField}
						hintText="Season"
						floatingLabelText="Season*"
						floatingLabelStyle={css_dashboard.formRequired}
					>
						{
							props.initialValues.quarterNamesList.map(name => 
								<MenuItem key={name} value={name} primaryText={name}/>
							)
						}
					</Field>
					</div>
					<div>
					<Field
						name="year" 
						normalize={normalizeYear}
						component={TextField}
						hintText="Year"
						floatingLabelText="Year*"
						floatingLabelStyle={css_dashboard.formRequired}
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

function mapStateToProps(state) {
	return { initialValues: state.seasons.list[0] };
}



export default reduxForm({
	form: 'AddSeasonForm',
	onSubmit: createTeam,
	onSubmitSuccess: openSnackbar,
	// validate,
})( 
	connect(mapStateToProps)(AddSeasonForm)
);



