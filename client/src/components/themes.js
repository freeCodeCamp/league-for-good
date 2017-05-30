import { changeTheme } from './style';
//*************************************************************************************
//****************************** Theme Colors *****************************************
//*************************************************************************************

const themeValues = {
	tealPink: {
		darkPrimaryColor: '#00796B',
		defaultPrimaryColor: '#009688',
		lightPrimaryColor: '#B2DFDB',
		textPrimaryColor: '#FFFFFF',
		accentColor: '#FF4081',
		primaryTextColor: '#212121',
		secondaryTextColor: '#757575',
		dividerColor: '#BDBDBD',
	},

	purpleAmber: {
		darkPrimaryColor: '#512DA8',
		defaultPrimaryColor: '#673AB7',
		lightPrimaryColor: '#D1C4E9',
		textPrimaryColor: '#FFFFFF',
		accentColor: '#FFC107',
		primaryTextColor: '#212121',
		secondaryTextColor: '#757575',
		dividerColor: '#BDBDBD',
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

export const defaultTheme = "bluegreyIndigo";

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
			changeTheme();
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
		}
	};
})(themeValues, 'bluegreyIndigo', warningMixin);

export default themes;
