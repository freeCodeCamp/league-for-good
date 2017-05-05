import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './auth';
import menuReducer from './menu';
import leagueReducer from './league';

//Create a single 'reducer' that stores all other various slices of state that were defined in the other reducers
//Redux uses a 'single source of truth' for an application's 'store'

const rootReducer = combineReducers({
	auth: authReducer,
	menu: menuReducer,
	form: formReducer,
	league: leagueReducer,
});

export default rootReducer;
