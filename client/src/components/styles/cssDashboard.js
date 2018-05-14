import themes from './themes';
import { common } from './common';

// used for colors common to all themes
const theme = themes.getCurrentThemeProps();

// dashboard will contain most of the actual managing
// of the league data
// rendered inside cssContent
export const cssDashboard = {
	// Loading a league to display to the user
	loading: {
		margin: '20px 0px 20px 0px'
	},
	// tabs are used to display sections to the user
	tabs: {
		inkBar: {
			zIndex: 999
		},
		tab: {
			height: '48px'
		}
	},
	title: {
		textAlign: 'center',
		margin: '0px 0px 0px 20px',
		padding: '0px',
		color: theme.textColor
	},
	// top section of the dashboard
	toolbar: {
		title: {
			color: theme.alternateTextColor,
			letterSpacing: 1.5,
			fontWeight: 'bolder',
			fontSize: '2em'
		},
		subtitle: {
			color: theme.accent3Color,
			marginLeft: '10px'
		},
		separator: {
			backgroundColor: theme.accent3Color
		}
	},
	warning: {
		textAlign: 'center',
		color: theme.warning
	},
	warningButton: {
		label: {
			color: theme.alternateTextColor,
			fontWeight: 500
		},
		style: { marginTop: '30px' },
		backgroundColor: theme.warning
	},
	form: common.form,
	formRow: common.formRow,
	formRequired: {
		color: theme.warning
	},
	raisedButton: common.raisedButton,
	// table contains the styling for the table template
	table: {
		style: {
			backgroundColor: theme.alternateTextColor
		},
		search: {
			marginLeft: '20px',
			marginBottom: '10px'
		},
		colHeaderHover: theme.alternateTextColor,
		// colHeaderButtonLabel: {
		// 	color: theme.textColor,
		// 	textTransform: 'none',
		// 	padding: '0px',
		// 	margin: '0px',
		// },
		colHeaderStyle: {

		},
		colHeaderLabelStyle: {
			display: 'flex',
			alignItems: 'center',
			color: theme.textColor
		},
		sortArrowActiveColor: theme.textColor,
		sortArrowInactiveColor: theme.borderColor,
		// for icons rendered inside the table
		iconHover: {
			backgroundColor: theme.accent3Color,
			borderRadius: '25px'
		},
		// columns uses defaultCol for all the columns in the table and
		// lets material ui automatically size the columns to an appropriate
		// width. If you are using an icon for a column, use the icon style
		// to reduce the width in the table since material ui will give it
		// a width that is usually too large
		columns: {

			defaultCol: {
				textAlign: 'center'
			},
			icon: {
				textAlign: 'left'

			}
		},
		// used for the team list displaying all teams in a league
		teams: {
			// toolbar used on top of table
			dropdown: {
				float: 'right',
				padding: '0px',
				margin: '0px'
			}
		}
	},
	// custom css in the teams tab
	teams: {
		forms: {
			edit: {
				style: {
					margin: '20px auto',
					width: '75%'
				},
				checkbox: {
					width: '125px'
				},
				checkboxDiv: {
					float: 'right'
				}
			}
		}
	},
	// custom css in the players tab
	players: {
		ul: {
			listStyleType: 'none'
		}
	},
	// custom css in the settings tab
	settings: {
		forms: {
			add: {
				textField: {
					width: '100%',
					padding: '0px'
				},
				selectField: {
					width: '15%',
					margin: '0px',
					padding: '0px',
					float: 'right',
					textAlign: 'left'
				},
				info: {
					marginBottom: '5px',
					marginLeft: '10px',
					textAlign: 'right',
					float: 'right'
				}
			},
			edit: {
				style: {
					margin: '20px auto',
					width: '75%'
				},
				selectField: {
					width: '40%',
					padding: '0px',
					textAlign: 'left',
					float: 'right'
				}
			}
		}
	}
};
