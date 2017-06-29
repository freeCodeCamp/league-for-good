import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modal';
import snackbarReducer from './snackbar';
import authReducer from './auth';
import menuReducer from './menu';
import leagueReducer from './league';
import teamReducer from './teams';
import manageReducer from './manage';
import rosterReducer from './roster';
import themeReducer from './theme';
import playerReducer from './player';
import settingsReducer from './settings';

// Create a single 'reducer' that stores all other various slices of
// state that were defined in the other reducers
// Redux uses a 'single source of truth' for an application's 'store'

const rootReducer = combineReducers({
	snackbar: snackbarReducer,
	modal: modalReducer,
	auth: authReducer,
	menu: menuReducer,
	form: formReducer,
	league: leagueReducer,
	teams: teamReducer,
	manage: manageReducer,
	roster: rosterReducer,
	theme: themeReducer,
	players: playerReducer,
	settings: settingsReducer
});

export default rootReducer;
