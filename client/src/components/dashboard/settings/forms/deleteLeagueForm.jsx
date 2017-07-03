import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import { cssContent, cssDashboard } from '../../../style';

const DeleteLeagueForm = () => {
	// const { handleSubmit } = props;
	return (
		<div style={cssContent.body}>
			<h1 style={cssDashboard.title}>Delete League</h1>
			<h2 style={cssDashboard.warning}>
				Are you sure you want to delete the league?
				This action cannot be undone.
			</h2>
			<form
				// onSubmit={ handleSubmit }
				style={cssDashboard.form}
				>
				<RaisedButton
					backgroundColor={cssDashboard.warningButton.backgroundColor}
					label='Delete League'
					labelStyle={cssDashboard.warningButton.label}
					style={cssDashboard.warningButton.style}
					type='submit'
				/>
			</form>
		</div>
	);
};

export default DeleteLeagueForm;
/* export default reduxForm({
	form: 'AddTeamForm',
	onSubmit: createTeam,
	onSubmitSuccess: openSnackbar,
	validate,
})( AddTeamForm );
*/

