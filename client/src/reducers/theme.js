import { CHANGE_THEME } from '../actions/types';
import themes from '../components/themes';

const defaultState = { theme: themes.getCurrentThemeName() };

export default function(state = defaultState, action) {

	switch(action.type) {
	
	case CHANGE_THEME:
		console.log(action.payload);
		return { theme: action.payload };
	}
	
	return state;
}


