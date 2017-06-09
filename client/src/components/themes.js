import { white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

//*************************************************************************************
//****************************** Theme Colors *****************************************
//*************************************************************************************

const themeValues = {
	/*tealPink: {
		darkPrimaryColor: '#00796B',
		defaultPrimaryColor: '#009688',
		lightPrimaryColor: '#B2DFDB',
		textPrimaryColor: '#FFFFFF',
		accentColor: '#FF4081',
		primaryTextColor: '#212121',
		secondaryTextColor: '#757575',
		dividerColor: '#BDBDBD',
	},*/
	teal: {
		primary1Color: '#9fa8da',	// default
		primary2Color: '#6f79a8',	// dark
		primary3Color: '#d1d9ff',	// light
		accent1Color: '#bdbdbd',	// default
		accent2Color: '#8d8d8d',	// dark
		accent3Color: '#efefef',	// light
		pickerHeaderColor: '#9fa8da',	// should be same as primary1Color
		canvasColor: '#d1d9ff',
	},

	/*purpleAmber: {
		darkPrimaryColor: '#512DA8',
		defaultPrimaryColor: '#673AB7',
		lightPrimaryColor: '#D1C4E9',
		textPrimaryColor: '#FFFFFF',
		accentColor: '#FFC107',
		primaryTextColor: '#212121',
		secondaryTextColor: '#757575',
		dividerColor: '#BDBDBD',
	},*/
	purple: {
		primary1Color: '#673AB7',	// default
		primary2Color: '#512DA8',	// dark
		primary3Color: '#D1C4E9',	// light
		pickerHeaderColor: '#673AB7',	// should be same as primary1Color
	},

	bluegreyIndigo: {
		darkPrimaryColor: '#455A64',
		defaultPrimaryColor: '#607D8B',
		lightPrimaryColor: '#CFD8DC',
		textPrimaryColor: '#FFFFFF',
		accentColor: '#536DFE',
		primaryTextColor: '#212121',
		secondaryTextColor: '#757575',
		dividerColor: '#BDBDBD',
	},
};

const defaultTheme = 'teal';

const textMixin = {
	textColor: '#000000',
	alternateTextColor: '#ffffff',
};

// extra colors required for the palette
const miscMixin = {
	//canvasColor: white,
	borderColor: '#bdbdbd',
	disabledColor: fade(darkBlack, 0.3),
	clockCircleColor: fade(darkBlack, 0.07),
	shadowColor: fullBlack,
};

// mixin for warning color to the user
const warningMixin = {
	warning: 'red',
};

const themes = (function(themeValues, defaultTheme, ...mixins) {
	// add all the mixins to each theme
	mixins.forEach(mixin => {
		Object.keys(themeValues).forEach(themeName => {
			themeValues[themeName] = Object.assign(themeValues[themeName], mixin);
		});
	});
	
	let currentTheme = themeValues[defaultTheme];
	let currentThemeName = defaultTheme;

	return {
		// set theme properties to a different theme
		// @newTheme(String) - new theme to set to
		setCurrentTheme(newTheme) {
			currentThemeName = newTheme;
			currentTheme = themeValues[newTheme];
		},
		// Retrieves the name of the currently active theme
		getCurrentThemeName() {
			return currentThemeName;
		},
		// Retrieves the property of the currently active theme
		getCurrentThemeProps() {
			return currentTheme;
		},
		// Retrieves a list of all theme names
		getThemeNames() {
			return Object.keys(themeValues);
		},
		// Retrieves a list of all theme properties
		getThemeList: function() {
			return themeValues;
		},
	};
})(themeValues, defaultTheme, textMixin, miscMixin, warningMixin);

export default themes;
