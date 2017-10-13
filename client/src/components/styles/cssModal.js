import themes from './themes';
import { common } from './common';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

export const cssModal = {
	dialogRoot: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 0
	},
	dialogContent: {
		position: 'relative',
		width: '90%',
		maxWidth: 800
	},
	dialogBody: {
		paddingBottom: 0
	},
	title: {
		textAlign: 'left',
		backgroundColor: theme.accent1Color,
		borderBottom: '1px solid ' + theme.borderColor,
		color: theme.alternateTextColor,
		fontWeight: 400
	},
	raisedButton: {
		style: ({...common.raisedButton.style, ...{
			marginRight: '10px',
			marginBottom: '10px'
		}}),
		label: common.raisedButton.label,
		backgroundColor: common.raisedButton.backgroundColor
	}
};
