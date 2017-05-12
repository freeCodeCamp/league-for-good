import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm, reset as resetForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createTeam, openSnackbar } from '../../../actions/index';
import { containerCSS, formCSS, formButtonCSS, titleCSS } from '../dashboardCSS';

// const onSuccess = (_, dispatch) => {
// 	const message = 'Your team was successfully added.';
// 	dispatch({ type: 'OPEN_SNACKBAR', payload: message})
// 	dispatch(resetForm('AddTeamForm'));
// };	




class AddTeamForm extends Component {
	onSubmit = ({name}) => {
		const { league:{_id}, createTeam } = this.props;
		createTeam({name, league:_id})
	};

	render() {
		const {handleSubmit} = this.props;

		return (
			<div style={containerCSS}>
				<h1 style={titleCSS}>Add Team</h1>
				<form 
					onSubmit={ handleSubmit(this.onSubmit)}
					style={formCSS}
				>
					<Field
						name="name" 
						component={TextField}
						hintText="Select a team name"
						floatingLabelText="Team name"
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

//Object to send to onSubmitSuccess to get a custom message and reset the form;
//We should eventual move this to it's own file
const onSubmitConfig = { 
	message: 'Your team was successfully added.',
	formName: 'AddTeamForm'
};


AddTeamForm = withRouter( AddTeamForm );

AddTeamForm = reduxForm({
	form: "AddTeamForm",
	onSubmitSuccess: openSnackbar.bind( onSubmitConfig )
})( AddTeamForm );

function mapDispatchToProps( dispatch ){
	return bindActionCreators({ createTeam }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTeamForm);

