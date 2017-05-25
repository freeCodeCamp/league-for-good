import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { css_createLeague } from '../style';


// Icon Component for the button
const CreateLeagueIcon = (props) => (
	<img src={props.icon} style={css_createLeague.sportIcon} />
);


// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<FlatButton 
		label={props.label}
		backgroundColor={props.active ? 
			css_createLeague.sportButton.active :
			css_createLeague.sportButton.inactive}
		hoverColor={props.active ?
			css_createLeague.sportButton.active : 
			css_createLeague.sportButton.hover}
		disableTouchRipple={true}
		style={css_createLeague.sportButton.style}
		onTouchTap={() => props.onClick(props.label)}
		icon={<CreateLeagueIcon icon={props.icon} />}
	/>
);

export default CreateLeagueButton;
