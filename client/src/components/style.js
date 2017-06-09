// Contains all the css for the components
import themes from './themes';

//let theme = themes.getCurrentThemeProps();
let theme = themes.getCurrentThemeProps();

export function changeTheme() {
	theme = themes.getCurrentThemeProps();
	// console.log(theme);
}


// common css that will be reused among components
export const common = {
	raisedButton: {
		label: {
			color: theme.textPrimaryColor,
			fontWeight: 500,
		},
		style: { marginTop: '30px' },
		backgroundColor: theme.defaultPrimaryColor,
	},
	formRow: {
		display:'flex',
		justifyContent:'space-around',
	},	
	form: {
		width: '80%',
		margin: '0px auto 5px',
		textAlign: 'center',
	},
};


// app bar component on top of window
export const css_appBar = {
	main:{
		zIndex: 2000,
		position: 'fixed',
		//backgroundColor: theme.darkPrimaryColor,
		borderBottom: '1px solid ' + theme.dividerColor,
	},
	text:{
		color: theme.textPrimaryColor,
		letterSpacing: 2,
	},
	iconStyle: {
		color: theme.textPrimaryColor,
	},
	themeMenuItem: {
		display: 'inline-block',
		borderRadius: '50%',
		width: '25px',
		height: '25px',
		marginRight: '5px',
		cursor: 'pointer',
		boxSizing: 'border-box',
	},
};


// login styling
export const css_login = {
	raisedButton: common.raisedButton,
	dialog: {
		title: {
			backgroundColor: theme.defaultPrimaryColor,
			borderBottom: '1px solid ' + theme.dividerColor,
			textAlign: 'center',
			color: theme.textPrimaryColor,
		},
	},
};


// menu on left side of window
export const css_menu = {
	drawer: {
		list: {
			marginTop: '70px',
		},
	},
	avatar: {
		backgroundColor: 'none',
	},
};


// content is a wrapper that will contain the main
// components rendered for the UI
export const css_content = {
	// paper is a material ui component used as background
	paper: {
		width:'90%',
		margin:'85px auto',
		height: 'auto',
		textAlign: 'center',
		//background: theme.textPrimaryColor,
		color: theme.primaryTextColor,
		border:'1px solid ' + theme.dividerColor,
	},
	header: {
		width: '100%',
		height: 'auto',
		//backgroundColor: theme.primary1Color,
	},
	// navbar designed for use with icons
	iconNavbar: {
		iconButton: {
			style: {
				margin: '10px',
			},
			iconStyle: {
				borderBottom: '4px solid ' + theme.accentColor,
				paddingBottom: '5px',			
			},
			hoveredStyle: {
				backgroundColor: theme.accentColor,
				borderRadius: '25px',
			},
		},
	},
	body: {
		width: '100%',
		height: 'auto',
		borderTop: '1px solid ' + theme.dividerColor,
		paddingTop: '40px',
		paddingBottom: '40px',
		backgroundColor: theme.textPrimaryColor,
		textAlign: 'left',
	},
};


// the create league component contains a form and
// corresponding buttons
// rendered inside css_content
export const css_createLeague = {
	form: common.form,
	raisedButton: common.raisedButton,
	card: {
		style: {
			boxShadow: 'none',
			backgroundColor: theme.lightPrimaryColor,
		},
		title: {
			titleColor: theme.primaryTextColor,
			subtitleColor: theme.secondaryTextColor,
		},
	},
	sportButton: {
		style: {
			marginRight: '10px',
			marginBottom: '10px',
			width: '160px',
			height: 'auto',
			textAlign: 'center',
			padding: '5px',
		},
		active: theme.accentColor,
		inactive: theme.defaultPrimaryColor,
		hover: theme.accentColor,
	},
	sportIcon: {
		height: '30px',
		verticalAlign: 'middle',
		marginRight: '10px',
		marginBottom: '10px',
		width: '160px',
		textAlign: 'center',
	},
};


// dashboard will contain most of the actual managing
// of the league data
// rendered inside css_content
export const css_dashboard = {
	// tabs are used to display sections to the user
	tabs: {
		tab: {
			// backgroundColor: theme.defaultPrimaryColor,
		},
		inkBar: {
			// backgroundColor: theme.accentColor,
			zIndex: 999,
		},
	},
	title: {
		textAlign: 'center',
		margin: '0px 0px 0px 20px',
		padding: '0px',
		color: theme.primaryTextColor,
	},
	toolbar: {
		// backgroundColor: theme.darkPrimaryColor,
	},
	toolbarTitle: {
		// color: theme.textPrimaryColor,
		letterSpacing: 1.5,
		fontWeight: 'bolder',
		fontSize: '2em',
	},
	toolbarSubtitle: {
		// color: theme.lightPrimaryColor,
		marginLeft: '10px',
	},
	warning: {
		textAlign: 'center',
		color: theme.warning,
	},
	form: common.form,
	formRow: common.formRow,
	formRequired: {
		color: theme.warning,
	},
	raisedButton: common.raisedButton,
	// table contains the styling for the table template
	table: {
		defaultCol: {
			textAlign: 'left',
		},
		search: {
			marginLeft: '20px',
			marginBottom: '10px',
		},
		searchUnderline: {
			//borderColor: theme.accentColor,
		},
		sortIcon: {
			display: 'inline',
			cursor: 'pointer',
		},
		colHeaderHover: theme.textPrimaryColor,
		colHeaderButtonLabel: {
			color: theme.primaryTextColor,
			textTransform: 'none',
			padding: '0px',
			margin: '0px',
		},
		colHeaderStyle: {
			padding: '0px',
			margin: '0px',
			textAlign: 'left',
		},
		sortArrowActiveColor: theme.primaryTextColor,
		sortArrowInactiveColor: theme.secondaryTextColor,
		iconHover: {		// for icons rendered inside the table
			backgroundColor: theme.accentColor,
			borderRadius: '25px',
		},
		columns: {
			primary: {
				textAlign: 'left',
			},
			secondary: {
				textAlign: 'left',
			},
			icon: {
				textAlign: 'left',
				width: '10%',
			},
		},
		teams: {
			// toolbar used on top of table
			dropdown: {
				float: 'right',
				padding: '0px',
				margin: '0px',
			},
			// how to render the columns in the teams table
			nameCol: {
				width: '30%',
				textAlign: 'left',
			},
			defaultCol: {
				width: 50 / 3 + '%',
				textAlign: 'left',
			},
			iconCol: {
				width: '10%',
				textAlign: 'left',
			},
		},
		// render columns in the team roster table
		roster: {
			nameCol: {
				width: '30%',
				textAlign: 'left',
			},
			defaultCol: {
				width: '20%',
				textAlign: 'left',
			},
			iconCol: {
				width: '10%',
				textAlign: 'right',
			},
		},
	},
	players: {
		title: {
			textAlign: 'center',
			margin: '0px 0px 0px 20px',
			padding: '0px',
			color: theme.primaryTextColor,
		},
		ul: {
			listStyleType: 'none',
		},
	},
};


// is rendered inside css_content
export const css_help = {
	container: {
		padding: '40px',
		textAlign: 'left',
	},
	title: {
		textAlign: 'center',
	},
	sectionHeader: {
		marginTop: '10px',
		marginBottom: '10px',
	},
	section: {
		marginLeft: '25px',
	},
	ul: {
		width: '75%',
		height: 'auto',
		padding: '20px',
		margin: '0px auto',
		marginBottom: '40px',
		color: theme.textPrimaryColor,
		backgroundColor: theme.lightPrimaryColor,
		border: '2px dotted ' + theme.dividerColor,
	},
	li: {
		marginLeft: '20px',
	},
};


export const css_modal = {
	dialogRoot: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 0,
	},
	dialogContent: {
		position: 'relative',
		width: '90%',
		maxWidth: 800,
	},
	dialogBody: {  
		paddingBottom: 0,
	},
	title: {
		textAlign: 'left',
		backgroundColor: theme.defaultPrimaryColor,
		color: theme.textPrimaryColor,
		fontWeight: 400,
	},
	raisedButton: common.raisedButton,
};
