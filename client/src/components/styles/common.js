import themes from './themes';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// common css that will be reused among components
export const common = {
	raisedButton: {
		label: {
			color: theme.alternateTextColor,
			fontWeight: 500
		},

		style: {
			marginTop: '50px'
		},
		backgroundColor: theme.accent1Color
	},
	formRow: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	form: {
		width: '80%',
		margin: '0px auto 15px',
		textAlign: 'center'
	}
};
