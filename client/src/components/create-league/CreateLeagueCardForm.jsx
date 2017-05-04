import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const formStyle = {
	margin: '40px'
};

const textFieldStyle = {
	marginRight: '10%'
};

const CreateLeagueCardForm = (props) => (
	<div>
		{props.sportType ? 
			<CreateLeagueForm 
				sportType={props.sportType}
				{...props}
			/> :
			<noScript />
		}
	</div>
);

const CreateLeagueForm = (props) => (
	<div style={formStyle}>
		<h2>{props.sportType} League</h2>
		<TextField 
			floatingLabelText="League Name"
			style={textFieldStyle}
			onChange={props.onChange}
			value={props.leagueName}
		/>
		<RaisedButton
			label="Create"
			primary={true}
			onTouchTap={props.onSubmit}
		/>
	</div>
);

export default CreateLeagueCardForm;