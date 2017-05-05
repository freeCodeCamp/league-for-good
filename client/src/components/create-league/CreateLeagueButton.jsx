import React from 'react';
import FlatButton from 'material-ui/FlatButton';

// CSS for a button
const buttonStyle = {
	marginRight: '10px',
	marginBottom: '10px',
	width: '160px',
	height: 'auto',
	textAlign: 'center',
	padding: '5px'
};

// CSS for the icon
const iconStyle = {
	width: '30px',
	height: '30px',
	verticalAlign: 'middle',
	marginRight: '10px',
	marginBottom: '10px',
	width:160,
	textAlign:'center'
};


// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<FlatButton 
		label={props.label}
		backgroundColor={props.active?"orange" : "lightblue"}
		hoverColor="#FFCC80"
		disableTouchRipple={true}
		style={buttonStyle}
		onTouchTap={() => props.onClick(props.label)}
		icon={<CreateLeagueIcon icon={props.icon} />}
	/>
);

// Icon Component for the button
const CreateLeagueIcon = (props) => (
	<img src={props.icon} style={iconStyle} />

);

export default CreateLeagueButton;