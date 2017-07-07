import React from 'react';
import AppBar from 'material-ui/AppBar';
import ThemeMenu from './ThemeMenu.jsx';
import { cssAppBar as css } from '../style';
import PropTypes from 'prop-types';

// Bar goes at the top of the window
// Contains the title, menu toggle and select theme menu
const ThemeIcon = props => {
	return (
		<ThemeMenu
			changeTheme={props.changeTheme}
			themeMenuOpen={props.themeMenuOpen}
			themeMenuToggle={props.themeMenuToggle}
		/>
	);
};

ThemeIcon.propTypes = {
	changeTheme: PropTypes.func,
	themeMenuOpen: PropTypes.bool,
	themeMenuToggle: PropTypes.func
};

const Bar = props => {
	const { toggleMenu, ...iconProps } = props;
	return (
		<AppBar
			iconElementRight={ <ThemeIcon {...iconProps} />}
			iconStyleLeft={css.text}
			onLeftIconButtonTouchTap={() => toggleMenu()}
			style={css.main}
			title='League For Good'
			titleStyle={css.text}
		/>
	);
};

Bar.propTypes = {
	toggleMenu: PropTypes.func
};

export default Bar;
