import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, AutoComplete } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';

import {
	createPlayer,
	updatePlayer,
	openSnackbar
} from '../../../../actions/index';
import { cssContent, cssDashboard } from '../../../style';

import { normalizeJerseyNum as normalize } from './utils/normalize';
import validate from './utils/addPlayerFormValidation';

let PlayerFormTemplate = ({handleSubmit, teams, title}) => {
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
						hintText='Phone number'
						name='phoneNum'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelText='Address'
						hintText='Address'
						name='address.street'
					/>
					<Field
						component={TextField}
						floatingLabelText='City'
						hintText='City'
						name='address.city'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={TextField}
						floatingLabelText='State'
						hintText='State'
						name='address.state'
					/>
					<Field
						component={TextField}
						floatingLabelText='Country'
						hintText='Country'
						name='address.country'
					/>
				</div>
				<div style={cssDashboard.formRow}>
					<Field
						component={AutoComplete}
						dataSource={teams}
						dataSourceConfig={{text: 'name', value: '_id'}}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText='Team'
						maxSearchResults={5}
						name='team.teamId'
					/>
					<Field
						component={TextField}
						floatingLabelText='Jersey Number'
						name='team.jerseyNum'
						normalize={normalize}
						type='number'
					/>
				</div>
				<div>
					<Field
						component={TextField}
						floatingLabelText='Position(s)'
						name='team.position'
					/>
				</div>
				<RaisedButton
					backgroundColor={cssDashboard.raisedButton.backgroundColor}
					label={title}
					labelStyle={cssDashboard.raisedButton.label}
					style={cssDashboard.raisedButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
};

PlayerFormTemplate.propTypes = {
	handleSubmit: PropTypes.func,
	teams: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string
};

function mapStateToProps({teams}, ownProps) {
	// flag for rendering props relative to Update form or Add player form
	const emptyForm = !ownProps.match.params.playerId;
	// Get proper 'form' key for reduxForm
	const form = emptyForm ? 'AddPlayerForm' : 'UpdatePlayerForm';
	// Get proper title
	const title = emptyForm ? 'Add a new player' : 'Update player';
	// Get proper onSubmit method
	const onSubmit = emptyForm ? createPlayer : updatePlayer;

	const initialValues = ownProps.location.state.player;

	return { teams, form, initialValues, title, onSubmit };
}

PlayerFormTemplate = reduxForm({
	validate,
	onSubmitSuccess: openSnackbar
})(PlayerFormTemplate);

export default connect(mapStateToProps)(PlayerFormTemplate);

/*
	Team input should hopefully be able to populate initialValue soon
	https://github.com/erikras/redux-form-material-ui/pull/140
*/
