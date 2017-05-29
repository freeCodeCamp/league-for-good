import React from 'react';
import AppBar from 'material-ui/AppBar';
import ThemeMenu from './ThemeMenu.jsx';
import { css_appBar as css } from '../style';

// Bar goes at the top of the window
// Contains the title, menu toggle and select theme menu
const Bar = props => {
	return (
		<AppBar 
			title="League For Good"
			iconStyleLeft={css.text}
			titleStyle={css.text}
			style={css.main}
			onLeftIconButtonTouchTap={() => props.toggleMenu()}
			iconElementRight={<ThemeMenu 
								themeMenuToggle={props.themeMenuToggle}
								themeMenuOpen={props.themeMenuOpen} 
								changeTheme={props.changeTheme}
							/>}
		/>
	);
};

export default Bar;
