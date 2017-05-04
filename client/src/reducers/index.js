import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import menuReducer from './menu';
import createLeagueReducer from './createleague';
import leagueReducer from './league';

const rootReducer = combineReducers({
	auth: authReducer,
	menu: menuReducer,
	form: formReducer,
	league: leagueReducer,
	createLeague: createLeagueReducer,
});

export default rootReducer;
