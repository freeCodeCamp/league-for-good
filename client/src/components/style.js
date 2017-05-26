// Contains all the css for the components

// Theme colors to be used
const theme = {
	primaryBackground: '#fff',
	secondaryBackground: '#f4f6f7',
	border: '#607d8b',
	buttonActive: 'orange',
	buttonInactive: 'lightblue',
	buttonHover: '#FFCC80',
	primary: '#0288D1',
	secondary: '#14b4fc',
	accent: '#60ccfd',
	error: 'red',
	primaryFont: '#131516',
	secondaryFont: '#707c80',
	buttonFont: '#fff',
};


//*************************************************************************************
//****************************** Theme Colors *****************************************
//*************************************************************************************
	
const PrimaryMain	= '#0288D1';
const PrimaryLight = '#5eb8ff';
const PrimaryDark = '#005b9f';

const BLACK = '#000';
const WHITE = '#fff';	


//Color Tool - https://material.io/color/#!/?view.left=0&view.right=1&primary.color=0071aa




// common css that will be reused among components
export const common = {
	raisedButton: {
		label: {
			color: theme.buttonFont,
			fontWeight: 500,
		},
		backgroundColor: theme.secondary,
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
		backgroundColor: PrimaryMain,
	},
	text:{
		color:WHITE,
		letterSpacing:2,
		textShadow: '-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000',
	},
	icon:{
		color:BLACK,
	},

};


// login styling
export const css_login = {
	raisedButton: common.raisedButton,
	dialog: {
		title: {
			textAlign: 'center',
			color: theme.primaryFont,
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
		background: theme.primaryBackground,
		color: theme.primaryFont,
		border:'1px solid ' + theme.border,
	},
	header: {
		width: '100%',
		height: 'auto',
		// paddingTop: '10px',
		backgroundColor: theme.secondaryBackground,
	},
	// navbar designed for use with icons
	iconNavbar: {
		iconButton: {
			style: {
				margin: '10px',
			},
			iconStyle: {
				borderBottom: '4px solid ' + theme.secondary,
				paddingBottom: '5px',
			},
			hoveredStyle: {
				color: theme.primaryFont,
				backgroundColor: theme.secondary,
				borderRadius: '25px',
			},
		},
	},
	body: {
		width: '100%',
		height: 'auto',
		borderTop: '1px solid ' + theme.border,
		paddingTop: '40px',
		paddingBottom: '40px',
		backgroundColor: theme.primaryBackground,
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
			marginTop: '-10px',		// compensate for header since this is material ui
			boxShadow: 'none',
			backgroundColor: theme.secondaryBackground,
		},
		title: {
			titleColor: theme.primaryFont,
			subtitleColor: theme.secondaryFont,
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
		active: theme.buttonActive,
		inactive: theme.secondary,
		hover: theme.buttonHover,
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
			backgroundColor: theme.primary,
		},
		inkBar: {
			backgroundColor: theme.accent,
			zIndex: 999,
		},
	},
	toolbar: {
		backgroundColor: PrimaryDark,
	},
	toolbarTitle: {
		color: WHITE,
		letterSpacing:1.5,
		fontWeight: 'bolder',
		fontSize: '2em',
	},
	toolbarSubtitle: {
		color: WHITE,
		marginLeft:8,
	},

	warning: {
		textAlign: 'center',
		color: theme.error,
	},
	form: common.form,
	formRequired: {
		color: theme.error,
	},
	raisedButton: common.raisedButton,
	// table contains the styling for the table template
	table: {
		defaultCol: {
			textAlign: 'left',
		},
		search: {
			marginLeft: '20px',
		},
		searchUnderline: {
			borderColor: theme.accent,
		},
		sortIcon: {
			display: 'inline',
			cursor: 'pointer',
		},
		colHeaderHover: theme.primaryBackground,
		colHeaderButtonLabel: {
			color: theme.primaryFont,
			textTransform: 'none',
			padding: '0px',
			margin: '0px',
		},
		colHeaderStyle: {
			padding: '0px',
			margin: '0px',
			textAlign: 'left',
		},
		sortArrowActiveColor: theme.primaryFont,
		sortArrowInactiveColor: theme.secondaryFont,
		iconHover: {		// for icons rendered inside the table
			color: theme.primaryFont,
			backgroundColor: theme.secondary,
			borderRadius: '25px',
		},
		// how to render the data in the teams table
		teams: {
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
		backgroundColor: theme.secondaryBackground,
		border: '2px dotted ' + theme.border,
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
		textAlign: 'center',
		background: theme.primaryBackground,
		color: theme.primaryFont,
	},
};

