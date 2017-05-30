import { CHANGE_THEME } from '../actions/types';
import { defaultTheme } from '../components/themes';

const storedTheme = localStorage.getItem("theme");

const defaultState = storedTheme? storedTheme : defaultTheme;

export default function(state = defaultState, action) {

	switch(action.type) {
	
	case CHANGE_THEME:
		return action.payload;
	}
	return state;
}


