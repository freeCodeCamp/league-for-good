import themes from './themes';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// content is a wrapper that will contain the main
// components rendered for the UI
export const cssContent = {
	// paper is a material ui component used as background
	paper: {
		width: '90%',
		margin: '85px auto',
		height: 'auto',
		textAlign: 'center',
		color: theme.textColor,
		border: '1px solid ' + theme.borderColor
	},
	header: {
		width: '100%',
		height: 'auto'
	},
	// navbar designed for use with icons
	iconNavbar: {
		iconButton: {
			style: {
				margin: '10px'
			},
			iconStyle: {
				borderBottom: '4px solid ' + theme.accent3Color,
				paddingBottom: '5px'
			},
			hoveredStyle: {
				backgroundColor: theme.accent3Color,
				borderRadius: '25px'
			}
		}
	},
	body: {
		width: '100%',
		height: 'auto',
		borderTop: '1px solid ' + theme.borderColor,
		paddingTop: '40px',
		paddingBottom: '40px',
		backgroundColor: theme.alternateTextColor,
		textAlign: 'left'
	}
};

