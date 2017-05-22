import React, {Component} from 'react';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTeam, openSnackbar } from '../../../actions/index';
import { containerCSS, formCSS, formButtonCSS, titleCSS, formRequiredCSS } from '../dashboardCSS';

const emailRegex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');

//prevent user from submitting incorrect player info
const validate = val => {
	const errors = {};
	if(!val.first_name){
		errors.first_name = 'Please provide a first name';
	}
	else if (!val.last_name) {
		errors.last_name = 'Please provide a last name';
	}
	else if (!val.email) {
		errors.email = 'Please provide an email address';
	}
	else if (!emailRegex.test(val.email)) {
		errors.email = 'Email is not in correct format';
	}
	return errors;
};

class AddPlayerForm extends Component {
	onSubmit({ name }){
		const { league: { _id }, createTeam } = this.props;
		//createTeam({name, league:_id});
		console.log('submitted');
	}

	render() {
		const {handleSubmit} = this.props;

		return (
			<div style={containerCSS}>
				<h1 style={titleCSS}>Add Player</h1>
				<h6 style={formRequiredCSS}>* = Required</h6>
				<form 
					onSubmit={ handleSubmit(this.onSubmit.bind(this))}
					style={formCSS}
				>
					<Field
						name="first_name" 
						component={TextField}
						hintText="First name"
						floatingLabelText="First name*"
						floatingLabelStyle={formRequiredCSS}
						fullWidth={true}
					/>
					<Field
						name="last_name" 
						component={TextField}
						hintText="Last name"
						floatingLabelText="Last name*"
						floatingLabelStyle={formRequiredCSS}
						fullWidth={true}
					/>
					<Field
						name="email" 
						component={TextField}
						hintText="Email"
						floatingLabelText="Email*"
						floatingLabelStyle={formRequiredCSS}
						fullWidth={true}
					/>
					<Field
						name="phone_num" 
						component={TextField}
						hintText="Phone number"
						floatingLabelText="Phone number"
						fullWidth={true}
					/>
					<Field
						name="address" 
						component={TextField}
						hintText="Address"
						floatingLabelText="Address"
						fullWidth={true}
					/>
					<Field
						name="city" 
						component={TextField}
						hintText="City"
						floatingLabelText="City"
						fullWidth={true}
					/>
					<Field
						name="state" 
						component={TextField}
						hintText="State"
						floatingLabelText="State"
						fullWidth={true}
					/>
					<Field
						name="country" 
						component={TextField}
						hintText="Country"
						floatingLabelText="Country"
						fullWidth={true}
					/>
					<RaisedButton
						label="Create Player"
						primary={true}
						type="submit"
						style={formButtonCSS}
					/>
				</form>
			</div>
		);
	}
}


const PlayerAddForm = reduxForm({
	form: 'AddPlayerForm',
	onSubmitSuccess: openSnackbar,
	validate,
})( AddPlayerForm );

function mapDispatchToProps( dispatch ){
	return bindActionCreators({ createTeam }, dispatch);
}

export default connect(null, mapDispatchToProps)(PlayerAddForm);

