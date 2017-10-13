import themes from './themes';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// app bar component on top of window
export const cssAppBar = {
	main: {
		zIndex: 2000,
		position: 'fixed'
	},
	text: {
		color: theme.alternateTextColor,
		letterSpacing: 2
	},
	iconStyle: {
		color: theme.alternateTextColor
	},
	themeMenuItem: {
		display: 'inline-block',
		borderRadius: '50%',
		width: '25px',
		height: '25px',
		marginRight: '5px',
		cursor: 'pointer',
		boxSizing: 'border-box'
	}
};
