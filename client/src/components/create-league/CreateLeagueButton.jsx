import React from 'react';
import FlatButton from 'material-ui/FlatButton';

// CSS for a button
const buttonStyle = {
	marginBottom: '10px'
};

// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<div>
		<FlatButton 
			label={props.label}
			backgroundColor="lightblue"
			style={buttonStyle}
			onTouchTap={() => props.onClick(props.label)}
		/>
	</div>
);

export default CreateLeagueButton;