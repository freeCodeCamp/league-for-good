import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, AutoComplete } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import { createPlayer, updatePlayer, openSnackbar } from '../../../../actions/index';
import { css_content, css_dashboard } from '../../../style';

import { normalizeJerseyNum as normalize } from './utils/normalize';
import validate from './utils/playerFormValidation';

let PlayerFormTemplate = ({handleSubmit, teams, title}) => {
	return (
		<div style={css_content.body}>
			<h1 style={css_dashboard.title}>{title}</h1>
			<h6 style={css_dashboard.warning}>* = Required</h6>
			<form
				onSubmit={ handleSubmit}
				style={css_dashboard.form}
				>
				<div style={css_dashboard.formRow}>
					<Field
						name='first_name'
						component={TextField}
						hintText='First name'
						floatingLabelText='First name*'
						floatingLabelStyle={css_dashboard.formRequired}
					/>
					<Field
						name='last_name'
						component={TextField}
						hintText='Last name'
						floatingLabelText='Last name*'
						floatingLabelStyle={css_dashboard.formRequired}
					/>
				</div>
				<div style={css_dashboard.formRow}>
					<Field
						name='email'
						component={TextField}
						hintText='Email'
						floatingLabelText='Email*'
						floatingLabelStyle={css_dashboard.formRequired}
					/>
					<Field
						name='phone_num'
						component={TextField}
						hintText='Phone number'
						floatingLabelText='Phone number'
					/>
				</div>
				<div style={css_dashboard.formRow}>
					<Field
						name='address.street'
						component={TextField}
						hintText='Address'
						floatingLabelText='Address'
					/>
					<Field
						name='address.city'
						component={TextField}
						hintText='City'
						floatingLabelText='City'
					/>
				</div>
				<div style={css_dashboard.formRow}>
					<Field
						name='address.state'
						component={TextField}
						hintText='State'
						floatingLabelText='State'
					/>
					<Field
						name='address.country'
						component={TextField}
						hintText='Country'
						floatingLabelText='Country'
					/>
				</div>
				<div style={css_dashboard.formRow}>
					<Field
						name='team.teamId'
						component={AutoComplete}
						filter={AutoComplete.caseInsensitiveFilter}
						floatingLabelText='Team'
						dataSource={teams}
						dataSourceConfig={{text: 'name', value: '_id'}}
						maxSearchResults={5}
					/>
					<Field
						name='team.jersey_num'
						floatingLabelText='Jersey Number'
						type='number'
						normalize={normalize}
						component={TextField}
					/>
				</div>
				<div>
					<Field
						name='team.position'
						component={TextField}
						floatingLabelText='Position(s)'
					/>
				</div>
				<RaisedButton
					label={title}
					labelStyle={css_dashboard.raisedButton.label}
					backgroundColor={css_dashboard.raisedButton.backgroundColor}
					style={css_dashboard.raisedButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
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
