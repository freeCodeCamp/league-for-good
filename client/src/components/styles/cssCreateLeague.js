import themes from './themes';
import { common } from './common';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// the create league component contains a form and
// corresponding buttons
// rendered inside cssContent
export const cssCreateLeague = {
	form: common.form,
	raisedButton: common.raisedButton,
	card: {
		style: {
			boxShadow: 'none'
		},
		title: {
			titleColor: theme.textColor,
			subtitleColor: theme.textColor
		}
	},
	sportButton: {
		style: {
			marginRight: '10px',
			marginBottom: '30px',
			width: '160px',
			height: 'auto',
			textAlign: 'center',
			padding: '5px'
		},
		active: theme.accent3Color,
		inactive: theme.alternateTextColor,
		hover: theme.accent3Color
	},
	sportIcon: {
		height: '30px',
		verticalAlign: 'middle',
		marginRight: '10px',
		marginBottom: '10px',
		width: '160px',
		textAlign: 'center'
	}
};
