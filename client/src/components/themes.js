import { white, darkBlack, fullBlack } from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

//*************************************************************************************
//****************************** Theme Colors *****************************************
//*************************************************************************************

// These theme values are only used as main colors in components
// Accent colors remain the same for smaller components
const themeValues = {
	lightgreen: {
		primary1Color: '#8BC34A',	// default
		primary2Color: '#689F38',	// dark
		primary3Color: '#DCEDC8',	// light
		pickerHeaderColor: '#8BC34A',	// should be same as primary1Color
		canvasColor: '#DCEDC8',		// should be same as primary3Color
	},

	teal: {
		primary1Color: '#009688',	// default
		primary2Color: '#00796B',	// dark
		primary3Color: '#B2DFDB',	// light
		pickerHeaderColor: '#009688',	// should be same as primary1Color
		canvasColor: '#B2DFDB',		// should be same as primary3Color
	},

	lightblue: {
		primary1Color: '#03A9F4',	// default
		primary2Color: '#0288D1',	// dark
		primary3Color: '#B3E5FC',	// light
		pickerHeaderColor: '#03A9F4',	// should be same as primary1Color
		canvasColor: '#B3E5FC',		// should be same as primary3Color
	},
};

// if user has no saved theme, default to this
const defaultTheme = 'lightblue';

const textMixin = {
	textColor: '#000000',
	alternateTextColor: '#ffffff',
};

const accentMixin = {
	accent1Color: '#455a64',	// default
	accent2Color: '#1c313a',	// dark
	accent3Color: '#718792',	// light
};

// extra colors required for the palette
const miscMixin = {
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
})(themeValues, defaultTheme, accentMixin, textMixin, miscMixin, warningMixin);

export default themes;
