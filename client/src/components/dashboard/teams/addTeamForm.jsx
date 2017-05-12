import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {createTeam} from '../../../actions/index';

class AddTeamForm extends Component {
	onSubmit = ({name}) => {
		const { league:{_id}, createTeam } = this.props;
		createTeam({name, league:_id})
	};

	render() {
		const {handleSubmit} = this.props;

		return ( 
				<form 
					onSubmit={ handleSubmit(this.onSubmit)}
					style={{width:"80%", margin:"20px auto"}}
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
					/>
				</form>
		);
	}
}

AddTeamForm = withRouter(AddTeamForm);

AddTeamForm = reduxForm({form:"AddTeamForm"})(AddTeamForm);

function mapDispatchToProps(dispatch){
	return bindActionCreators({createTeam}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddTeamForm);

