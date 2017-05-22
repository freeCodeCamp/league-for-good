import React, {Component} from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTeam, openSnackbar } from '../../../actions/index';
import { containerCSS, formCSS, formButtonCSS, titleCSS, formRequiredCSS } from '../dashboardCSS';


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
			<div style={containerCSS}>
				<h1 style={titleCSS}>Add Team</h1>
				<h6 style={formRequiredCSS}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit(this.onSubmit.bind(this))}
					style={formCSS}
				>
					<Field
						name="name" 
						component={TextField}
						hintText="Team name"
						floatingLabelText="Team name*"
						floatingLabelStyle={formRequiredCSS}
						fullWidth={true}
					/>
					<RaisedButton
						label="Create Team"
						primary={true}
						type="submit"
						style={formButtonCSS}
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

