/* eslint-disable react/no-multi-comp */
import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

import { cssCreateLeague } from '../styles';
import CreateLeagueIcon from './CreateLeagueIcon.jsx';

export default class CreateLeagueButton extends React.Component {
	render() {
		const active = this.props.active;
		const icon = this.props.icon;
		const label = this.props.label;
		const onClick = this.props.onClick;
		return (
			<FlatButton
				backgroundColor={active ?
					cssCreateLeague.sportButton.active :
					cssCreateLeague.sportButton.inactive}
				disableTouchRipple={true}
				hoverColor={active ?
					cssCreateLeague.sportButton.active :
					cssCreateLeague.sportButton.hover}
				icon={<CreateLeagueIcon icon={icon} />}
				label={label}
				// onTouchTap={() => props.onClick(props.label)}
				onTouchTap={() => onClick(label)}
				style={cssCreateLeague.sportButton.style}
			/>
		);
	}
}

CreateLeagueButton.propTypes = {
	active: PropTypes.bool,
	icon: PropTypes.string,
	label: PropTypes.string,
	onClick: PropTypes.func
};
