import { CHANGE_THEME } from '../actions/types';
import themes from '../components/themes';

const storedTheme = localStorage.getItem("theme");

const defaultState = storedTheme? storedTheme : themes.getCurrentThemeName();

export default function(state = defaultState, action) {

	switch(action.type) {
	
	case CHANGE_THEME:		
		localStorage.setItem("theme", action.payload);
		return action.payload;
	}

	return state;
}


