import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import validate from './validate';
import CreateLeagueSelector from './CreateLeagueSelector.jsx';
import { createLeague } from '../../actions/index';
import { cssContent, cssCreateLeague } from '../style';


class CreateLeagueForm extends Component {

	onSubmit = formBody => {
		const { createLeague, history } = this.props;
		const redirectMethod = () => history.push('/');

		// call the createLeague action and pass in the validated form fields
		// and a callback function to redirect the url.
		// I cant figure out another way to trigger the redirect after a successful form submission
		// than by accessing react-routers built in method from inside the component
		createLeague(formBody, redirectMethod);
	}

	render() {
		const {error, handleSubmit, change, SelectedSportType} = this.props;

		return (
			<div style={cssContent.header}>
				<CreateLeagueSelector
					onSelect={(sport) => change('sportType', sport)}
					selectedSport={SelectedSportType}
				/>
				{
					SelectedSportType &&
					<div style={cssContent.body}>
						<form
							onSubmit={ handleSubmit(this.onSubmit)}
							style={cssCreateLeague.form}
							>
							<Field
								name='sportType'
								type='hidden'
								component='input'
							/>
							<Field
								name='name'
								component={TextField}
								floatingLabelText={`${SelectedSportType} League Name`}
								fullWidth={true}
							/>
							<RaisedButton
								label='Create'
								labelStyle={cssCreateLeague.raisedButton.label}
								backgroundColor={cssCreateLeague.raisedButton.backgroundColor}
								style={cssCreateLeague.raisedButton.style}
								type='submit'
							/>
						</form>
					</div>
				}
			</div>
		);
	}
}

// redux-form method to access form field values
const selector = formValueSelector('CreateLeagueForm');

// Callback function passed to the connect function to access the form state
function mapFormStateToProps(state) {
	return {SelectedSportType: selector(state, 'sportType')};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ createLeague }, dispatch);
}

// Decorate component one last time with react-router bindings in order to redirect user
// after a successful form submission
export default withRouter(
	// Decorate component with redux bindings
	connect(mapFormStateToProps, mapDispatchToProps)(
		// Decorate component with redux-form
		reduxForm({ form: 'CreateLeagueForm', validate })(
			CreateLeagueForm
		)
	)
);
