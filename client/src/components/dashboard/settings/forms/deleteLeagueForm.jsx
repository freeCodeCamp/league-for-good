import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { cssContent, cssDashboard } from '../../../style';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { deleteLeague } from '../../../../actions/index';

const DeleteLeagueForm = props => {
	const { handleSubmit } = props;
	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>Delete League</h1>
			<h2 style={cssDashboard.warning}>
				Are you sure you want to delete the league?
				This action cannot be undone.
			</h2>
			<form
				onSubmit={ handleSubmit }
				style={cssDashboard.form}
				>
				<RaisedButton
					backgroundColor={cssDashboard.warningButton.backgroundColor}
					label="Delete League"
					labelStyle={cssDashboard.warningButton.label}
					style={cssDashboard.warningButton.style}
					type="submit"
				/>
			</form>
		</div>
	);
};

DeleteLeagueForm.propTypes = {
	handleSubmit: PropTypes.func
};

export default reduxForm({
	form: 'DeleteLeagueForm',
	onSubmit: deleteLeague,
	
})( DeleteLeagueForm );


