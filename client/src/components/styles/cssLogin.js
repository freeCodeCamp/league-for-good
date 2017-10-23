import themes from './themes';
import { common } from './common';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// login styling
export const cssLogin = {
	raisedButton: common.raisedButton,
	dialog: {
		title: {
			backgroundColor: theme.accent1Color,
			borderBottom: '1px solid ' + theme.borderColor,
			color: theme.alternateTextColor
		}
	}
};
