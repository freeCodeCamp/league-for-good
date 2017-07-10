import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modal';
import loadingReducer from './loading';
import snackbarReducer from './snackbar';
import authReducer from './auth';
import menuReducer from './menu';
import leagueReducer from './league';
import teamReducer from './teams';
import themeReducer from './theme';
import playerReducer from './player';
import settingsReducer from './settings';
import rolesReducer from './roles';
import seasonsReducer from './seasons';

// Create a single 'reducer' that stores all other various slices of
// state that were defined in the other reducers
// Redux uses a 'single source of truth' for an application's 'store'

const rootReducer = combineReducers({
	snackbar: snackbarReducer,
	modal: modalReducer,
	isLoading: loadingReducer,
	auth: authReducer,
	menu: menuReducer,
	form: formReducer,
	league: leagueReducer,
	teams: teamReducer,
	theme: themeReducer,
	players: playerReducer,
	settings: settingsReducer,
	roles: rolesReducer,
	seasons: seasonsReducer,
});

export default rootReducer;
