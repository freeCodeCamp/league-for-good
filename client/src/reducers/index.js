import { combineReducers } from 'redux';
import authReducer from './auth';
import menuReducer from './menu';
import createLeagueReducer from './createleague';

const rootReducer = combineReducers({
	auth: authReducer,
	menu: menuReducer,
	createLeague: createLeagueReducer
});

export default rootReducer;
