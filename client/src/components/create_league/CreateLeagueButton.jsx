import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

import { cssCreateLeague } from '../style';

// Icon Component for the button
const CreateLeagueIcon = (props) => (
	<img src={props.icon} style={cssCreateLeague.sportIcon} />
);

CreateLeagueIcon.propTypes = {
	icon: PropTypes.string
};

// League Button with icon for create league form
const CreateLeagueButton = (props) => (
	<FlatButton
		backgroundColor={props.active ?
			cssCreateLeague.sportButton.active :
			cssCreateLeague.sportButton.inactive}
		disableTouchRipple={true}
		hoverColor={props.active ?
			cssCreateLeague.sportButton.active :
			cssCreateLeague.sportButton.hover}
		icon={<CreateLeagueIcon icon={props.icon} />}
		label={props.label}
		onTouchTap={() => props.onClick(props.label)}
		style={cssCreateLeague.sportButton.style}
	/>
);

CreateLeagueButton.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string,
	label: PropTypes.string,
	onClick: PropTypes.func
};

export default CreateLeagueButton;
