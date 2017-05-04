import React, {Component} from 'react';
import {TextField} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import {Field, reduxForm} from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import validate from './validate';

const formStyle = {
	width:'80%',
	margin:'40px auto 30px'
};

const textFieldStyle = {
	marginRight: '10%'
};

const buttonStyle = {
	marginTop:'30px'
};



class CreateLeagueForm extends Component{

	onSubmit = data => {
		const {sportType} = this.props.league;
		const body = {...data, sportType};
		
		axios.post('/league/create', body)
			.then((response) => {
				console.log('successful post', response.data);
			}).catch(() => {
				console.log('error client side');
			});		
	}

	render(){
		const {error, handleSubmit} = this.props;

		if(!this.props.league.sportType) return <noScript/>;

		return(	 
			<form style={formStyle}>
				<h2>{this.props.league.sportType} League</h2>
				<Field
					name="name" 
					component={TextField}
					floatingLabelText="League Name"
					fullWidth={true}
					style={textFieldStyle}
				/>
				<RaisedButton
					label="Create"
					style={buttonStyle}
					primary={true}
					onTouchTap={ handleSubmit(this.onSubmit)}
				/>
			</form>
		);
	}
}

function mapStateToProps(state){
	const { createLeague } = state;

	return { league: createLeague };
}

CreateLeagueForm = connect(mapStateToProps)(CreateLeagueForm);

export default reduxForm(
	{form:'CreateLeagueForm',validate})(CreateLeagueForm)