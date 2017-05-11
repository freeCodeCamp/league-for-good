import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddTeamForm extends Component {

	render() {
		return (
			<div>
				<h1>Add Team</h1>
			</div>
		);
	}
}

//Decorate component one last time with react-router bindings in order to redirect user
//after a successful form submission
export default AddTeamForm;

