import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { cssCreateLeague } from '../style';


// Icon Component for the button
const CreateLeagueIcon = (props) => (
	<img src={props.icon} style={cssCreateLeague.sportIcon} />
);


// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<FlatButton
		label={props.label}
		backgroundColor={props.active ?
			cssCreateLeague.sportButton.active :
			cssCreateLeague.sportButton.inactive}
		hoverColor={props.active ?
			cssCreateLeague.sportButton.active :
			cssCreateLeague.sportButton.hover}
		disableTouchRipple={true}
		style={cssCreateLeague.sportButton.style}
		onTouchTap={() => props.onClick(props.label)}
		icon={<CreateLeagueIcon icon={props.icon} />}
	/>
);

export default CreateLeagueButton;
