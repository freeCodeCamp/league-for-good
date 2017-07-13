// Contains all the css for the components
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
		justifyContent: 'space-around'
	},
	form: {
		width: '80%',
		margin: '0px auto 15px',
		textAlign: 'center'
	}
};


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

export const cssLoading = {
	style: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		background: 'white',
		zIndex: 2001,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	size: 80
};

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


// menu on left side of window
export const cssMenu = {
	drawer: {
		list: {
			marginTop: '70px'
		}
	},
	avatar: {
		backgroundColor: 'none'
	}
};


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


// is rendered inside cssContent
export const cssHelp = {
	container: {
		backgroundColor: theme.alternateTextColor,
		padding: '40px',
		textAlign: 'left'
	},
	title: {
		textAlign: 'center',
		marginBottom: '30px'
	},
	sectionHeader: {
		marginTop: '10px',
		marginBottom: '10px'
	},
	section: {
		marginLeft: '25px'
	},
	ul: {
		width: '75%',
		height: 'auto',
		padding: '20px',
		margin: '0px auto',
		marginBottom: '40px',
		color: theme.alternateTextColor,
		backgroundColor: theme.accent3Color,
		border: '2px dotted ' + theme.borderColor
	},
	li: {
		marginLeft: '20px'
	}
};


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
