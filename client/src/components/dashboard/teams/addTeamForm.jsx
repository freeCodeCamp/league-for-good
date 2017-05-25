import React, {Component} from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTeam, openSnackbar } from '../../../actions/index';
import { css_content, css_dashboard } from '../../style';


//prevent user from submitting a team name that is blank or too short
const validate = val => {
	const errors = {};
	if(!val.name){
		errors.name = 'Please provide a team name';
	}
	return errors;
};

class AddTeamForm extends Component {
	onSubmit({ name }){
		const { league: { _id }, createTeam } = this.props;
		createTeam({name, league:_id});
	}

	render() {
		const {handleSubmit} = this.props;

		return (
			<div style={css_content.body}>
				<h1 style={css_dashboard.title}>Add Team</h1>
				<h6 style={css_dashboard.warning}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit(this.onSubmit.bind(this))}
					style={css_dashboard.form}
				>
					<Field
						name="name" 
						component={TextField}
						hintText="Team name"
						floatingLabelText="Team name*"
						floatingLabelStyle={css_dashboard.formRequired}
						fullWidth={true}
					/>
					<RaisedButton
						label="Create Team"
						labelStyle={css_dashboard.raisedButton.label}
						backgroundColor={css_dashboard.raisedButton.backgroundColor}
						type="submit"
					/>
				</form>
			</div>
		);
	}
}


const TeamAddForm = reduxForm({
	form: 'AddTeamForm',
	onSubmitSuccess: openSnackbar,
	validate,
})( AddTeamForm );

function mapDispatchToProps( dispatch ){
	return bindActionCreators({ createTeam }, dispatch);
}

export default connect(null, mapDispatchToProps)(TeamAddForm);

