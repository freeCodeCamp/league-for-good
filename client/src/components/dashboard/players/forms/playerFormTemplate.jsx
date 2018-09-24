import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, propTypes as rfProps } from 'redux-form';
import { TextField, SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { getFormVals } from './playerFormData.selector';
// import { openSnackbar } from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../styles';
import validate from './utils/addPlayerFormValidation';

let PlayerFormTemplate = props => {
	const { handleSubmit, teams, title, buttonLabel } = props;
	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>{title}</h1>
			<h6 style={cssDashboard.warning}>* = Required</h6>
			<form
				onSubmit={ handleSubmit}
				style={cssDashboard.form}
				>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelStyle={cssDashboard.formRequired}
						floatingLabelText='First name*'
						hintText='First name'
						name='firstName'
					/>
					<Field
						component={TextField}
						floatingLabelStyle={cssDashboard.formRequired}
						floatingLabelText='Last name*'
						hintText='Last name'
						name='lastName'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelStyle={cssDashboard.formRequired}
						floatingLabelText='Email*'
						hintText='Email'
						name='email'
					/>
					<Field
						component={TextField}
						floatingLabelText='Phone number'
						hintText='Example: 1-555-555-5555'
						name='phoneNum'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelStyle={cssDashboard.formRequired}
						floatingLabelText='Address*'
						hintText='Address'
						name='address.street'
					/>
					<Field
						component={TextField}
						floatingLabelText='City*'
						hintText='City'
						name='address.city'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}

						floatingLabelText='State*'
						hintText='State'
						name='address.state'
					/>
					<Field
						component={TextField}

						floatingLabelText='Country*'
						hintText='Country'
						name='address.country'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={SelectField}
						floatingLabelText='Team'
						name='team.teamId'
						style={{maxHeight: 150}}
						>
						{
							teams.map(team => (
								<MenuItem
									key={team._id}
									primaryText={team.name}
									value={team._id}
								/>
								)
							)
						}
					</Field>
					<Field
						component={TextField}
						floatingLabelText='Jersey Number'
						name='team.jerseyNum'
						parse={val => parseInt(val, 10)}
						type='number'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelText='Position(s)'
						name='team.position'
						parse={vals => vals.split(/\,\s*/)}
					/>
				</div>
				<Field
					component='input'
					name='originalTeam'
					type='hidden'
				/>
				<RaisedButton
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
					label={buttonLabel || 'Submit'}
					labelStyle={cssDashboard.raisedButton.label}
					style={cssDashboard.raisedButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
};

PlayerFormTemplate.propTypes = {
	...rfProps,
	buttonLabel: PropTypes.string,
	formAction: PropTypes.func.isRequired,
	formName: PropTypes.string.isRequired,
	playerId: PropTypes.string,
	teams: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string
};

const formVals = getFormVals();

function mapStateToProps(state, ownProps) {
	// flag for rendering props relative to Update form or Add player form
	const { formName, formAction, title } = ownProps;
	const { initialValues, teams } = formVals(state, ownProps);
	return {
		form: formName,
		initialValues,
		onSubmit: formAction,
		teams,
		title: title
	};
}

PlayerFormTemplate = reduxForm({
	validate
	// onSubmitSuccess: openSnack
})(PlayerFormTemplate);

export default connect(mapStateToProps)(PlayerFormTemplate);

/*
	Team input should hopefully be able to populate initialValue soon
	https://github.com/erikras/redux-form-material-ui/pull/140
*/
